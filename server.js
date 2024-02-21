const http = require('http');
const {Server} = require('socket.io');
const OpenAI = require('openai');
require('dotenv').config();

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Dynamic Custom Topic Quiz Challenge Server\n');
});

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});


const io = new Server(server, {
    cors: {
        origin: '*',
    },
});

let quizTheme = ""
let quizDifficulty = ""

io.on('connection', (socket) => {
    console.log(`User ${socket.id} connected`);

    socket.on('disconnect', () => {
        console.log(`User ${socket.id} disconnected`);
    });

    socket.on('joinGameRoom', (data) => {
        socket.join(data.room);
        io.to(data.room).emit('playerJoined', {player: socket.id});
    });

    socket.on('leaveGameRoom', (data) => {
        socket.leave(data.room);
    });

    socket.on('chooseTheme', (data) => {
        quizTheme = data.theme;
        console.log(`Quiz theme: ${quizTheme}`);
    });

    socket.on('startQuiz', (data) => {
        const {difficulty, room} = data;
        quizDifficulty = difficulty
        console.log(`Quiz started in room ${room} with difficulty: ${difficulty}`);
    });

    socket.on('requestNewQuestion', async () => {
        try {
            const questionPrompt = `Generate a trivia question about the following theme: ${quizTheme}.
             The level of difficulty must be ${quizDifficulty}.`;
            const questionResponse = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'user',
                        content: questionPrompt,
                    },
                ],
                max_tokens: 100,
            });

            const newQuestion = questionResponse.choices[0].message.content;

            const hintPrompt = `Generate a hint for this question: ${newQuestion}`;
            const hintResponse = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'user',
                        content: hintPrompt,
                    },
                ],
                max_tokens: 100,
            });

            const hint = hintResponse.choices[0].message.content;

            const answersPrompt = `Provide 4 possible answers to the following question: ${newQuestion}
             One answer needs to be true, the three others must be false.
             I want the result as an array of JSON object, with the text of the answer and "isTrue" attribute. The true answers isn't always the first one.
             Before giving answers, make sure that the "true" one is really true. Read your text twice, and then give answers.`;

            const answersResponse = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'user',
                        content: answersPrompt,
                    },
                ],
                max_tokens: 200,
            });
            const answersString = answersResponse.choices[0].message.content;
            const answersArray = JSON.parse(answersString);

            io.to(socket.id).emit('newQuestion', {question: newQuestion, hint: hint, answers: answersArray});
        } catch (error) {
            console.error('Error generating question:', error.message);
        }
    });

});

server.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});

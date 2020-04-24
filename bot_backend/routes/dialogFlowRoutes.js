const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send({"chat-bot": 'hi there, I am a hardware bot'})
});

router.post('/df_text_query', (req, res) => {
    res.send({'do': 'text query'});
})

router.post('/df_event_query', (req, res) =>{
    res.send({'do': 'event_query'});
})

module.exports = router;
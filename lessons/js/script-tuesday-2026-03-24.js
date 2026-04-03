const words = [
    ["Although", "/ɔːlˈðəʊ/", "Silent 'gh'"], 
    ["Answer", "/ˈɑːnsə/", "Silent 'w'"], 
    ["Architecture", "/ˈɑːkɪtektʃə/", "CH = K"],
    ["Blood", "/blʌd/", "Sounds like 'mud'"], 
    ["Business", "/ˈbɪznɪs/", "Two syllables"], 
    ["Chaos", "/ˈkeɪɒs/", "CH = K"],
    ["Clothes", "/kləʊðz/", "One syllable"], 
    ["Comfortable", "/ˈkʌmftəbl/", "3 syllables"], 
    ["Debt", "/det/", "Silent 'b'"],
    ["Determined", "/dɪˈtɜːmɪnd/", "Last syllable 'ind'"], 
    ["Empty", "/ˈempti/", "Soft 'p'"], 
    ["Engineer", "/ˌendʒɪˈnɪə/", "Stress at end"],
    ["Enough", "/ɪˈnʌf/", "GH = F"], 
    ["Island", "/ˈaɪlənd/", "Silent 's'"], 
    ["Knowledge", "/ˈnɒlɪdʒ/", "Silent 'k'"],
    ["Listen", "/ˈlɪsn/", "Silent 't'"], 
    ["Muscle", "/ˈmʌsl/", "Silent 'c'"], 
    ["Often", "/ˈɒfn/", "Silent 't' (usually)"],
    ["Queue", "/kjuː/", "Like the letter Q"], 
    ["Receipt", "/rɪˈsiːt/", "Silent 'p'"], 
    ["Recipe", "/ˈresəpi/", "Three syllables"],
    ["Rough", "/rʌf/", "GH = F"], 
    ["Schedule", "/ˈʃedjuːl/", "SH in UK"], 
    ["Should", "/ʃʊd/", "Silent 'l'"],
    ["Subtle", "/ˈsʌtl/", "Silent 'b'"], 
    ["Sugar", "/ˈʃʊɡə/", "S = SH"], 
    ["Through", "/θruː/", "Silent 'gh'"],
    ["Thought", "/θɔːt/", "Long 'o'"], 
    ["Wednesday", "/ˈwenzdeɪ/", "Silent 'd'"], 
    ["Women", "/ˈwɪmɪn/", "O = I"]
];

const tbody = document.getElementById('phonetic-body');
words.forEach((w, i) => {
    tbody.innerHTML += `<tr><td>${i+1}</td><td>${w[0]}</td><td><b>${w[1]}</b></td><td>${w[2]}</td></tr>`;
});

    function checkQuiz(id) {
        const quiz = document.getElementById(id);
        const inputs = quiz.querySelectorAll('input[type="radio"]:checked');
        const res = document.getElementById('res-' + id);
        let correct = 0;
        inputs.forEach(i => { if(i.value === 'c') correct++; });
        
        const total = quiz.querySelectorAll('.question').length;
        res.style.display = 'block';
        res.innerHTML = `Score: ${correct}/${total}. ` + (correct === total ? "Perfect! Logic applied." : "Review the video to find the missing logic.");
        res.style.color = correct === total ? "var(--success)" : "var(--error)";
    }
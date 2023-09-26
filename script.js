var jobTitles = ['Front-End', 'Java', 'web', 'software'];
    var currentIndex = 0;

    function updateJobTitle() {
        var jobTitleElement = document.getElementById('dynamictexts');
        jobTitleElement.textContent = jobTitles[currentIndex];
        currentIndex = (currentIndex + 1) % jobTitles.length;
    }

    setInterval(updateJobTitle, 1600);

    
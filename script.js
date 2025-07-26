
document.getElementById('resume-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const job = document.getElementById('job').value;
    const description = document.getElementById('description').value;

    try {
        const response = await fetch('/functions/api/handler.ts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, job, description })
        });

        if (!response.ok) {
            throw new Error('Failed to generate resume');
        }

        const data = await response.json();
        const resumeContent = data.resume;

        document.getElementById('resume-content').innerHTML = resumeContent;
        document.getElementById('resume-result').classList.remove('hidden');
    } catch (error) {
        console.error('Error generating resume:', error);
    }
});

document.getElementById("getForm").addEventListener('submit', (event) => {
    event.preventDefault();
    const request = document.getElementById("getRequest").value;
    const responseDataElement = document.getElementById('responseData');

    console.log('URL:', request);
    console.log('Method: GET');
    
    fetch(request)
        .then(response => {
            console.log('Response status:', response.status, '\n');
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("responseContainer").style.border = "solid #59ff00";
            responseDataElement.textContent = JSON.stringify(data, null, 2);
            responseDataElement.style.display = "block";
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById("responseContainer").style.border = "solid #ff0000";
            responseDataElement.textContent = 'Error fetching data';
            responseDataElement.style.display = "block";
        });
});

document.addEventListener('DOMContentLoaded', function () {
    const postPutForm = document.getElementById('postPutForm');
    const responseData = document.getElementById('responseData');

    postPutForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const url = document.getElementById('postPutrequest').value;
        const method = document.querySelector('.custom-dropdown-trigger').textContent.trim();
        let payload = document.getElementById('payload').value;

        if (!payload) {
            document.getElementById("responseContainer").style.border = "solid #ff0000";
            document.getElementById("responseData").textContent = 'Error: Payload is empty';
            return;
        }

        try {
            const parsedPayload = JSON.parse(payload);
            payload = JSON.stringify(parsedPayload);
        } catch (error) {
            document.getElementById("responseContainer").style.border = "solid #ff0000";
            responseData.textContent = 'Error: Invalid JSON in payload';
            return;
        }

        console.log('URL:', url);
        console.log('Method:', method);
        console.log('Payload:', payload);

        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: payload
        })
        .then(response => {
            console.log('Response status:', response.status, '\n');
            if(response.status == 204) {
                return null;
            }
            if(response.status == 404) {
                return "Error 404 not found";
            }
            return response.text().then(text => {
                if (text) {
                    try {
                        return JSON.parse(text);
                    } catch {
                        return text;
                    }
                } else {
                    return null; 
                }
            });
        })
        .then(data => {
            if (data === null) {
                document.getElementById("responseContainer").style.border = "solid #ffffff";
                responseData.textContent = 'No data provided by the server';
            } else if (typeof data === 'string') {
                document.getElementById("responseContainer").style.border = "solid #ffffff";
                responseData.textContent = `Response: ${data}`;
            } else {
                document.getElementById("responseContainer").style.border = "solid #59ff00";
                responseData.textContent = JSON.stringify(data, null, 2);
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
            document.getElementById("responseContainer").style.border = "solid #ff0000";
            responseData.textContent = `Error fetching data`;
        });
    });
});

document.querySelector('.custom-dropdown-trigger').addEventListener('click', () => {
    const dropdown = document.querySelector('.custom-dropdown');
    dropdown.classList.toggle('active');
});
 
document.querySelectorAll('.custom-dropdown-item').forEach(item => {
    item.addEventListener('click', (event) => {
        const dropdown = document.querySelector('.custom-dropdown');
        const trigger = document.querySelector('.custom-dropdown-trigger');
 
        trigger.textContent = event.target.textContent;
        dropdown.classList.remove('active');
    });
});
 
window.addEventListener('click', (event) => {
    const dropdown = document.querySelector('.custom-dropdown');
    if (!dropdown.contains(event.target) && !event.target.classList.contains('custom-dropdown-trigger')) {
        dropdown.classList.remove('active');
    }
});

function openPage() {
    const newPageUrl = "https://www.continental.com/ro-ro/";
    window.open(newPageUrl, '_blank');
}

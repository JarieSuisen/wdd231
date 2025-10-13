const eventSource = './data/events.json';

const eventBox = document.querySelector('#event-list')

const modal = document.querySelector('#event-details')

// eventbox.innerHTML = 'HELLO WORLD';//THIS IS JUST TO TEST THAT THE ITEM IS TARGETED CORRECTLY

getEventInfo();

async function getEventInfo() {

    // eventbox.innerHTML = '';

    const response = await fetch(eventSource);
    const data = await response.json();

    // console.table(data['events']);

    displayEvents(data['events']);

    // return data['events'];
};

// getEventInfo();

function displayEvents(eventsList) {

    // console.table(eventsList);

    eventsList.forEach(event => {

        // console.table(event);

        const card = document.createElement('section');
        card.classList.add('event-card');

        const eventName = document.createElement('h2');
        const eventDate = document.createElement('p');
        const eventTime = document.createElement('p');
        const eventHost = document.createElement('p');
        const eventSummary = document.createElement('p');

        const button = document.createElement('button');
        button.classList.add('modal-btn');

        const name = event['name'];
        // console.log(name);
        const date = event['date'];
        // console.log(date);
        const time = event['time'];
        // console.log(time);
        // const host = event['host'];
        // console.log(host);
        // const summary = event['summary'];
        // console.log(summary);

        eventName.textContent = `${name}`;
        eventDate.textContent = `Date: ${date}`;
        eventTime.textContent = `Time: ${time}`;
        // eventHost.textContent = `Host: ${host}`;
        // eventSummary.textContent = `Summary: ${summary}`;

        button.textContent = `Full Details`;

        // ADD EVENT LISTENER
        button.addEventListener('click', () => {
            displayEventDetails(event);
        });

        card.appendChild(eventName);
        card.appendChild(eventDate);
        card.appendChild(eventTime);
        // card.appendChild(eventHost);
        // card.appendChild(eventSummary);
        card.appendChild(button);
        eventBox.appendChild(card);
    });
};


function displayEventDetails(event) {
    modal.innerHTML = '';
    modal.innerHTML = `
        <div id="modal" class="event-modal">
        <button id="closeModal">❌</button>
        <h2>${event.name}</h2>
        <p><strong>Date: </strong>${event.date}</p>
        <p><strong>Time: </strong>${event.time}</p>
        <p><strong>Host: </strong>${event.host}</p>
        <p><strong>Summary: </strong>${event.summary}</p>
        </div>
    `;
    modal.showModal();
    // const closeModal = document.querySelector('#closeModal');
    closeModal.addEventListener("click", () => {
        modal.close();
    });
}

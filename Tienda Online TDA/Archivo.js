function openTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.tab[onclick="openTab('${tabId}')"]`).classList.add('active');
}

function toggleSubcatalogo(catalogoId) {
    const subcatalogo = document.getElementById(catalogoId);
    if (subcatalogo.classList.contains('open')) {
        subcatalogo.style.maxHeight = 0;
        subcatalogo.classList.remove('open');
    } else {
        subcatalogo.style.maxHeight = subcatalogo.scrollHeight + 'px';
        subcatalogo.classList.add('open');
    }
}

function showInfo(infoId) {
    document.querySelectorAll('.info-producto').forEach(info => {
        info.classList.remove('active');
    });
    document.getElementById(infoId).classList.add('active');
}

function hideInfo(infoId) {
    document.getElementById(infoId).classList.remove('active');
}

function showAnuncio() {
    document.getElementById('anuncio').classList.add('show');
}

function hideAnuncio() {
    document.getElementById('anuncio').classList.remove('show');
}

window.onload = function() {
    setTimeout(showAnuncio, 3000); // Muestra el anuncio 3 segundos después de cargar
};



function openTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.tab[onclick="openTab('${tabId}')"]`).classList.add('active');
}

function openProductInfo(infoId) {
    openTab('mas-informacion');
}
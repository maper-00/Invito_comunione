/**
 * Comunione Fede - JavaScript
 * Funzioni per l'interazione della pagina di invito
 */

/**
 * Apre la busta con animazione
 */
function openEnvelope() {
  const env    = document.getElementById('envelope');
  const intro  = document.getElementById('intro');
  const invite = document.getElementById('invite');
  
  env.classList.add('opening');
  
  setTimeout(() => {
    intro.classList.add('closing');
    invite.classList.add('visible');
  }, 900);
  
  setTimeout(() => { 
    intro.style.display='none'; 
  }, 1800);
}

/**
 * Apre un modal passando il tipo
 * @param {string} type - Il tipo di modal da aprire (es. 'chiesa', 'location')
 */
function openModal(type) {
  document.getElementById('modal-'+type).classList.add('open');
  document.body.style.overflow='hidden';
}

/**
 * Chiude un modal per id
 * @param {string} id - L'id del modal da chiudere
 */
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow='';
}

/**
 * Chiude il modal quando si clicca fuori
 * @param {Event} e - L'evento click
 * @param {string} id - L'id del modal
 */
function closeModalOutside(e,id) {
  if(e.target===document.getElementById(id)) closeModal(id);
}

'use strict';

(function() {
  var userDialog = document.querySelector('.setup'),
      popupOpen = document.querySelector('.setup-open'),
      popupOpenIcon = popupOpen.querySelector('.setup-open-icon'),
      popupClose = document.querySelector('.setup-close'),
      dialogHandle = userDialog.querySelector('.upload');

  function onPopupEscPress(e) {
    window.util.isEscEvent(e, closePopup);
  };
  
  function openPopup() {
    userDialog.style.top = 80 + 'px';
    userDialog.style.left = 951 + 'px'; 
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);

  };
  
  function closePopup() {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);

  };

  popupOpen.addEventListener('click', function() {
    openPopup();
  });
  
  popupOpenIcon.addEventListener('keydown', function(e) {
    window.util.isEnterEvent(e, openPopup);
  });
  
  popupClose.addEventListener('click', function() {
    userDialog.classList.add('hidden');
  });
  
  popupClose.addEventListener('keydown', function(e) {
    window.util.isEscEvent(e, closePopup);
  });   
  
  dialogHandle.addEventListener('mousedown', function(e) {
    e.preventDefault();

    function onMouseMove(evt) {
      evt.preventDefault();
  
      userDialog.style.top = (evt.clientY - 25) + 'px';
      userDialog.style.left = (evt.clientX + 355) + 'px';

    };

    function onMouseUp(upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  })
})();
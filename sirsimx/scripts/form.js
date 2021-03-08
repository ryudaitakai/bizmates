var popsize = document.getElementById('popsize');
popsize.addEventListener("change", changeSimParams());

var recoverytimeinmillis = document.getElementById('recoverytimeinmillis');
recoverytimeinmillis.addEventListener("change", changeSimParams());

var infectionprobability = document.getElementById('infectionprobability');
infectionprobability.addEventListener("change", changeSimParams());

var speedRange = document.getElementById('speed');
speedRange.addEventListener("change", changeSimParams());

var quarantinedRange = document.getElementById('quarantined');
quarantinedRange.addEventListener("change", changeSimParams());

var restartbtn = document.getElementById('restartbtn');
restartbtn.addEventListener("click", changeSimParams());

var resetbtn = document.getElementById('resetbtn');
resetbtn.addEventListener("click", changeSimParams(true));

/** Resets the simulation with new parameters. If arguments
 * are passed it resets to the default simulation values. */
function changeSimParams(resetToDefault) {
  if (resetToDefault) {
    function updateRangeValues() {
      $('#psactval').html(document.getElementById('popsize').value);
      $('#rtactval').html(document.getElementById('recoverytimeinmillis').value);
      $('#ipactval').html(document.getElementById('infectionprobability').value);
      $('#spactval').html(document.getElementById('speed').value);
      $('#qractval').html(document.getElementById('quarantined').value);
    }
    return () => {
      const defaultValues = sirsim.getDefaultValues();
      popsize.value = defaultValues.popsize;
      recoverytimeinmillis.value = defaultValues.recoveryTimeInMillis;
      infectionprobability.value = defaultValues.infectionProbability;
      speedRange.value = defaultValues.speed;
      quarantinedRange.value = defaultValues.quarantined;
      sirsim.reset();
      updateRangeValues();
    }
  }

  let prev_psize, prev_rectime, prev_iprob, prev_speed, prev_quarant;
  return function () {
    if (resetToDefault) {
      sirsim.reset();
    } else {
      let arg = new Object();
      let psize = parseInt(popsize.value);
      let rectime = parseInt(recoverytimeinmillis.value);
      let iprob = parseFloat(infectionprobability.value);
      let speed = parseFloat(speedRange.value);
      let quarant = parseFloat(quarantinedRange.value);
      if (psize >= 10 && psize <= 500) {
        arg.popsize = psize;
      }
      if (rectime) {
        arg.recoveryTimeInMillis = rectime;
      }
      if (iprob) {
        arg.infectionProbability = iprob;
      }
      if (speed) {
        arg.speed = speed;
      }
      if (quarant) {
        arg.quarantined = quarant;
      }
      if (prev_psize !== psize || prev_iprob !== iprob ||
        prev_rectime !== rectime || prev_speed !== speed || prev_quarant !== quarant) {
        sirsim.reset(arg);
      }
    }
  }
}

// configure the form ranges labels
$(function () {
  $("#psmin").html(document.getElementById('popsize').getAttribute('min'));
  $("#psmax").html(document.getElementById('popsize').getAttribute('max'));
  $("#ipmin").html(document.getElementById('infectionprobability').getAttribute('min'));
  $("#ipmax").html(document.getElementById('infectionprobability').getAttribute('max'));
  $("#rtmin").html(document.getElementById('recoverytimeinmillis').getAttribute('min'));
  $("#rtmax").html(document.getElementById('recoverytimeinmillis').getAttribute('max'));
  $("#spmin").html(document.getElementById('speed').getAttribute('min'));
  $("#spmax").html(document.getElementById('speed').getAttribute('max'));
  $("#qrmin").html(document.getElementById('quarantined').getAttribute('min'));
  $("#qrmax").html(document.getElementById('quarantined').getAttribute('max'));

  $('#psactval').html(document.getElementById('popsize').value);
  $('#rtactval').html(document.getElementById('recoverytimeinmillis').value);
  $('#ipactval').html(document.getElementById('infectionprobability').value);
  $('#spactval').html(document.getElementById('speed').value);
  $('#qractval').html(document.getElementById('quarantined').value);

  popsize.addEventListener('change', (() => {
    $('#psactval').html(document.getElementById('popsize').value);
  }));
  recoverytimeinmillis.addEventListener('change', (() => {
    $('#rtactval').html(document.getElementById('recoverytimeinmillis').value);
  }));
  infectionprobability.addEventListener('change', (() => {
    $('#ipactval').html(document.getElementById('infectionprobability').value);
  }));
  speedRange.addEventListener('change', (() => {
    $('#spactval').html(document.getElementById('speed').value);
  }));
  quarantinedRange.addEventListener('change', (() => {
    $('#qractval').html(document.getElementById('quarantined').value);
  }));
});

// disables form submission, to prevent unwanted page updates
$('form').submit(false);

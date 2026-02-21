document.addEventListener("DOMContentLoaded", () => {
  enableTooltips();

  // button 1
  const firsBtn = document.querySelector('[data-js="t1-btn"]');
  const colorImage = document.querySelector('[data-js="t1-hex"]');
  firsBtn.addEventListener("click", () => {
    let newColor = Math.floor(Math.random() * 0xffffff).toString(16);
    firsBtn.style.background = "#" + newColor;
    colorImage.textContent = "#" + newColor;
  })

  // 2
  const firstEnter = document.querySelector('[data-js="t2-input"]');
  const t2Counst = document.querySelector('[data-js="t2-count"]');
  firstEnter.addEventListener("input", () => {
    if (firstEnter.value.length > 50) {
      firstEnter.value = firstEnter.value.substring(0, 50);
    }
    t2Counst.textContent = firstEnter.value.length;
  })

  // 3
  const thirdEnter = document.querySelector('[data-js="t3-input"]');
  const thirdClick = document.querySelector('[data-js="t3-add"]');
  const thirdSp = document.querySelector('[data-js="t3-list"]');
  thirdClick.addEventListener("click", () => {
    if (thirdEnter.value === "") return;
    let newSp = document.createElement("li");
    newSp.textContent = thirdEnter.value;
    thirdSp.appendChild(newSp);
    thirdEnter.value = "";
  })

  // 4
  const fourthMinus = document.querySelector('[data-js="t4-minus"]');
  const fourthPlus = document.querySelector('[data-js="t4-plus"]');
  const fourthReset = document.querySelector('[data-js="t4-reset"]');
  const fourthOut = document.querySelector('[data-js="t4-out"]');
  let fourthValue = 0;
  fourthMinus.addEventListener("click", () => {
    fourthValue -= 1;
    fourthOut.textContent = fourthValue;
  })
  fourthPlus.addEventListener("click", () => {
    fourthValue += 1
    fourthOut.textContent = fourthValue;
  })
  fourthReset.addEventListener("click", () => {
    fourthValue = 0;
    fourthOut.textContent = fourthValue;
  })

  // 5
  const fifthClick = document.querySelector('[data-js="t5-open"]');
  const fifthModal = document.querySelector('[data-js="t5-modal"]');
  const fifthSecondClick = document.querySelector('[data-js="t5-close"]');
  const fifthBack = document.querySelector('[data-js="t5-backdrop"]');
  fifthClick.addEventListener("click", () => {
    fifthModal.hidden = false;
  })
  fifthSecondClick.addEventListener("click", () => {
    fifthModal.hidden = true;
  })
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {fifthModal.hidden = true;}
  })
  fifthBack.addEventListener("click", (e) => {
    fifthModal.hidden = true;
  })

  // 6
  const sixthTabs = document.querySelectorAll(".tab");
  let sixthCurrentTab = "a";
  sixthTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelector(`[data-tab="${sixthCurrentTab}"]`).classList.toggle('is-active');
      document.querySelector(`[data-pane="${sixthCurrentTab}"]`).classList.toggle('is-active');
      sixthCurrentTab = tab.dataset.tab;
      tab.classList.toggle("is-active");
      document.querySelector(`[data-pane="${sixthCurrentTab}"]`).classList.toggle('is-active');
    })
  })

  //7
  const seventhEnter = document.querySelector('[data-js="t7-input"]');
  const seventhClick = document.querySelector('[data-js="t7-run"]');
  const seventhOut = document.querySelector('[data-js="t7-out"]');
  seventhClick.addEventListener("click", () => {
    let text = seventhEnter.value;
    seventhOut.textContent = text.split("").reverse().join("");
    seventhEnter.value = "";
  })

  // 8
  const eightA = document.querySelector('[data-js="t8-a"]');
  const eightB = document.querySelector('[data-js="t8-b"]');
  const eightSum = document.querySelector('[data-js="t8-add"]');
  const eightMul = document.querySelector('[data-js="t8-mul"]');
  const eightResult = document.querySelector('[data-js="t8-out"]');
  eightSum.addEventListener("click", () => {
    if (eightA.value === "" || eightB.value === "") return;
    let a = Number(eightA.value);
    let b = Number(eightB.value);
    eightResult.textContent = eightA.value + eightB.value;
    if (!Number.isNaN(a) && !Number.isNaN(b)) eightResult.textContent = a + b;
    eightA.value = "";
    eightB.value = "";
  })
  eightMul.addEventListener("click", () => {
    if (eightA.value === "" || eightB.value === "") return;
    let a = Number(eightA.value);
    let b = Number(eightB.value);

    if (!Number.isNaN(a) && !Number.isNaN(b)) {
      eightResult.textContent = eightA.value * eightB.value;
      eightA.value = "";
      eightB.value = "";
    }
  })

  // 9
  const ninthClick = document.querySelector('[data-js="t9-toggle"]');
  const ninthText = document.querySelector('[data-js="t9-text"]');
  ninthClick.addEventListener("click", () => {
    ninthText.hidden = !ninthText.hidden;
    ninthClick.textContent = ninthClick.textContent === "Показать" ? "Скрыть" : "Показать";
  })

  // 10
  const tenthRange = document.querySelector('[data-js="t10-range"]');
  const tenthOut = document.querySelector('[data-js="t10-out"]');
  const tenthBox = document.querySelector('[data-js="t10-box"]');
  tenthRange.addEventListener("input", (e) => {
    tenthOut.textContent = e.target.value + "px";
    tenthBox.style.width = tenthOut.value;
    tenthBox.style.height = tenthOut.value;
  })

  // 11
  const eleventhInput = document.querySelector('[data-js="t11-seconds"]');
  const eleventhStart = document.querySelector('[data-js="t11-start"]');
  const eleventhStop = document.querySelector('[data-js="t11-stop"]');
  const eleventhOut = document.querySelector('[data-js="t11-out"]');
  let eleventhSeconds = 0;
  eleventhStart.addEventListener("click", () => {
    eleventhSeconds = Number(eleventhInput.value);
    if (!Number.isNaN(eleventhSeconds)) {
      eleventhInput.value = "";
      eleventhOut.value = eleventhSeconds;
      const interval = setInterval(() => {
        eleventhSeconds--;
        eleventhOut.textContent = eleventhSeconds;
        if (eleventhSeconds <= 0) {
          eleventhOut.value = 0;
          clearInterval(interval);
        }
      }, 1000)
    }
  })
  eleventhStop.addEventListener("click", () => {
    eleventhSeconds = 0;
  })

  // 12
  const twelfthButton = document.querySelector('[data-js="t12-plus"]');
  const twelfthLabel = document.querySelector('[data-js="t12-label"]');
  const twelfthBar = document.querySelector('[data-js="t12-bar"]');
  let twelfthProgress = 0;
  twelfthButton.addEventListener("click", () => {
    if (twelfthProgress < 100){
      twelfthProgress += 10;
      twelfthLabel.textContent = twelfthProgress + "%";
      twelfthBar.style.width = twelfthProgress + "%";
    }
  })

  // 13
  const firteenthOut = document.querySelector('[data-js="t13-out"]');
  const firteenthInput = document.querySelector('[data-js="t13-input"]');
  const firteenthKeys = new Set();

  firteenthInput.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      firteenthInput.blur();
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.repeat) return;

    firteenthKeys.add(e.key);
    firteenthOut.textContent = Array.from(firteenthKeys).join(", ")  + " нажаты";
    if (e.key === "Control" || e.key === "q" || e.key === "й" || e.key === "Q" || e.key === "Й") {
      if (firteenthKeys.has("Control") && (firteenthKeys.has("q") || firteenthKeys.has("й") || firteenthKeys.has("Q") || firteenthKeys.has("Й"))) {
        firteenthInput.value = "";
      }
    }
  })

  document.addEventListener('keyup', (e) => {
    firteenthKeys.delete(e.key);
    firteenthOut.textContent = Array.from(firteenthKeys).join(", ")  + " нажаты";
    if (firteenthKeys.size === 0) {firteenthOut.textContent = "Ничего не нажато. "}
  })


  // 14
  const fourteenthButton = document.querySelector('[data-js="t14-next"]');
  const fourteenthOut = document.querySelector('[data-js="t14-out"]');
  const fourteenthArray = [
    "«мяу»<p>Гашик.",
    "«бе»<p>Вика",
    "«ме»<p>Вика",
    "«я люблю наркотики»<p>Настя",
    "«халяль гэнста»<p>Холишутер",
    "«цитат больше не будет»<p>До свидания",
    
  ];

  let fourteenthChoose = -1;
  fourteenthButton.addEventListener("click", () => {
    let fourteenthNext =  Math.floor(Math.random() * fourteenthArray.length);
    if (fourteenthNext === fourteenthChoose) fourteenthNext = (fourteenthNext + 1) % fourteenthArray.length;
    fourteenthChoose = fourteenthNext;
    fourteenthOut.innerHTML = fourteenthArray[fourteenthChoose];
  })

  // 15
  const fifteenthArea = document.querySelector('[data-js="t15-area"]');
  const fifteenthItem = document.querySelector('[data-js="t15-item"]');
  const fifteenthCoords = document.querySelector('[data-js="t15-coords"]');
  let fifteenthDown = false;
  let fifteenthX;
  let fifteenthY;

  fifteenthItem.addEventListener('mousedown', (e) => {
    const itemRect = fifteenthItem.getBoundingClientRect();
    fifteenthDown = true;
    fifteenthX = e.clientX - itemRect.left;
    fifteenthY = e.clientY - itemRect.top;
  })

  document.addEventListener('mousemove', (e) => {
    const itemRect = fifteenthItem.getBoundingClientRect();
    if (!fifteenthDown) return;
    let areaRect = fifteenthArea.getBoundingClientRect();
    let x = Math.min(Math.max(e.clientX - areaRect.left - fifteenthX, 0), areaRect.width - itemRect.width);
    let y = Math.min(Math.max(e.clientY - areaRect.top  - fifteenthY, 0), areaRect.height - itemRect.height);
    fifteenthCoords.textContent = `x: ${x}, y: ${y}`;
    fifteenthItem.style.left = x + 'px';
    fifteenthItem.style.top  = y + 'px';
  })

  document.addEventListener('mouseup', () => {
    fifteenthDown = false;
  });

  // 16
  const sixteenthAnimate = document.querySelector('[data-js="t16-animate"]');
  const sixteenthBox = document.querySelector('[data-js="t16-box"]');
  sixteenthAnimate.addEventListener('click', () => {
    sixteenthBox.classList.add("is-bouncing");
    setTimeout(() => {
      sixteenthBox.classList.remove("is-bouncing");
    }, 1000);
  })

  // 17
  // const seventeenthArea = document.querySelector('[data-js="t17-area"]');
  // let seventh = true;
  // const seventeenthObserver = new IntersectionObserver((entries, observer) => {
  //   entries.forEach(entry => {
  //     if (!entry.isIntersecting || !seventh) return;
  //     seventhLoop();
  //     seventh = false;
  //   });
  // }, {
  //   root: null,
  //   threshold: 0.1,
  // });

  // function seventhLoop(){
  //   if (!seventhLoop) return;
    
  //   SeventeenthSpawn();
    
  //   setTimeout(seventhLoop, 1000);
  // }
  // function SeventeenthSpawn() {
  //   const square = document.createElement('div');
  //   const areaV = seventeenthArea.getBoundingClientRect();
  //   square.style.position = 'absolute';
  //   square.style.height = '100px';
  //   square.style.width = '100px';
  //   square.style.backgroundColor = '#ff0000';
  //   square.style.backgroundSize = "100% 100%";
  //   square.style.top = Math.random() * (areaV.height - 100) + 'px';
  //   square.style.left = Math.random() * (areaV.width - 100) + 'px';
  //   seventeenthArea.appendChild(square);
    
  //   setTimeout(() => {square.remove()});
  // }

  // seventeenthObserver.observe(seventeenthArea);
  
  // 18
  const t18area = document.querySelector('[data-js="t18-area"]');
  t18area.style.maxWidth = '100%';
  spawnStars(t18area);

  function spawnStars(area) {
    spawnRunStars(area);
    setTimeout(spawnStars, 100 + Math.random() * 300, area);
  }
  
  function spawnRunStars(area) {
    const square = document.createElement('div');
    let bonus = 1;
    square.style.position = 'absolute';
    square.style.height = '100px';
    square.style.width = '100px';
    square.style.backgroundColor = '#ff0000';
    square.style.backgroundSize = "100% 100%";
    area.appendChild(square);

    square.style.top = Math.random() * (area.clientHeight - square.offsetHeight) + 'px';
    const startLeft = area.clientWidth;
    square.style.left = startLeft + 'px';
    if (Math.random() < 0.8) {bonus = 5}
    speedStar(square, area, bonus * (1 + Math.random() * 2));
  }
  function speedStar(square, area, baseSpeed) {
    let lastTime = null;
    let speed = baseSpeed;        
    let accel = 0;      

    function frame(timestamp) {
      if (lastTime === null) lastTime = timestamp;
      const dt = (timestamp - lastTime) / 1000;
      lastTime = timestamp;

      let left = parseFloat(square.style.left);

      if (left + square.offsetWidth < 0) {
        square.remove();
        return;
      }
      
      if (Math.random() < dt * 5) {
        const aMax = 40;
        accel = (Math.random() * 2 - 1) * aMax;
      }
      
      speed += accel * dt;
      
      const minSpeed = baseSpeed * 0.7;
      const maxSpeed = baseSpeed * 2;
      if (speed < minSpeed) speed = minSpeed;
      if (speed > maxSpeed) speed = maxSpeed;
      
      left -= speed * dt * 20;
      square.style.left = left + 'px';

      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }


  // 21
  function spawnRunningBlocks(area, scoretab, lives) {
    if (!playing || Number(lives.textContent) <= 0) return;
    const square = document.createElement('div');
    square.style.position = 'absolute';
    square.style.height = '100px';
    square.style.width = '100px';
    square.style.backgroundColor = '#ff0000';
    square.style.backgroundSize = "100% 100%";
    area.appendChild(square);
    
    square.style.top = Math.random() * (area.clientHeight - square.offsetHeight) + 'px';
    const startLeft = area.clientWidth;
    square.style.left = startLeft + 'px';
    
    square._destroyed = false;
    
    square.addEventListener('click', () => {
      if (square._destroyed) return;
      square.remove();
      scoretab.textContent = Number(scoretab.textContent) + 1;
    })
    speedLoop(square, area, 2 + Math.random() * 2, lives);
  }

  function speedLoop(square, area, speed, lives) {
    if (!playing || !square.isConnected || square._destroyed) return;

    let lastTime = null;

    function frame(timestamp) {
      if (!playing || !square.isConnected || square._destroyed) return;

      if (lastTime === null) {
        lastTime = timestamp;
      }

      const dt = timestamp - lastTime;
      lastTime = timestamp;

      const left = parseInt(square.style.left);

      if (left + square.offsetWidth < 0) {
        if (square._destroyed) return;
        lives.textContent = Number(lives.textContent) - 1;
        square.remove();
        if (Number(lives.textContent) <= 0) {
          lives.textContent = 0;
        }
        return;
      }
      if (left < -1 * square.offsetWidth / 10) {speed*=1.1}
      const dx = speed * (dt / 12);
      square.style.left = (left - dx) + 'px';

      requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
  }
  function speedLoop(square, area, speed, lives) {
    if (!playing || !square.isConnected || square._destroyed) return;

    let lastTime = null;

    function frame(timestamp) {
      if (!playing || !square.isConnected || square._destroyed) return;

      if (lastTime === null) {
        lastTime = timestamp;
      }

      const dt = timestamp - lastTime;
      lastTime = timestamp;

      const left = parseInt(square.style.left);

      if (left + square.offsetWidth < 0) {
        if (square._destroyed) return;
        lives.textContent = Number(lives.textContent) - 1;
        square.remove();
        if (Number(lives.textContent) <= 0) {
          lives.textContent = 0;
        }
        return;
      }
      const dx = speed * (dt / 12);
      square.style.left = (left - dx) + 'px';

      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  
  function spawnLoop(area, scoretab, lives) {
    if (Number(lives.textContent) <= 0) {
      area.innerHTML = area.innerHTML + "<div style='top: 40%; position: relative; font-size: 300%'>Нажмите что бы начать заново</div>";
      playing = false
      return;
    }
    spawnRunningBlocks(area, scoretab, lives);
    setTimeout(spawnLoop, 100 + Math.random() * 500, area, scoretab, lives);
  }
  
  let playing = false;
  const t21area = document.querySelector('[data-js="t21-area"]');
  const t21scoretab = document.querySelector('[data-js="t21-score"]');
  const t21livestab = document.querySelector('[data-js="t21-lives"]');
  t21area.innerHTML = "<div style='top: 45%; position: relative'>Нажмите что бы начать</div>";
  t21area.addEventListener('click', () => {
    if (playing) {
      return;
    }
    playing = true;
    t21livestab.textContent = 3;
    t21scoretab.textContent = 0;
    t21area.innerHTML = '';
    spawnLoop(t21area, t21scoretab, t21livestab);
  })
});

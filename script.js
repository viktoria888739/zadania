document.addEventListener("DOMContentLoaded", () => {
  enableTooltips();

  const block_size = 100;
  const spawn_interval = 1000;

  // button 1
  const firsBtn = document.querySelector('[data-js="t1-btn"]');
  const colorImage = document.querySelector('[data-js="t1-hex"]');
  firsBtn.addEventListener("click", () => {
    let newColor = Math.floor(Math.random() * 0xffffff).toString(16);
    firsBtn.style.background = "#" + newColor;
    colorImage.textContent = "#" + newColor;
  });

  // 2
  const firstEnter = document.querySelector('[data-js="t2-input"]');
  const t2Counst = document.querySelector('[data-js="t2-count"]');
  firstEnter.addEventListener("input", () => {
    if (firstEnter.value.length > 50) {
      firstEnter.value = firstEnter.value.substring(0, 50);
    }
    t2Counst.textContent = firstEnter.value.length;
  });

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
  });

  // 4
  const fourthMinus = document.querySelector('[data-js="t4-minus"]');
  const fourthPlus = document.querySelector('[data-js="t4-plus"]');
  const fourthReset = document.querySelector('[data-js="t4-reset"]');
  const fourthOut = document.querySelector('[data-js="t4-out"]');
  let fourthValue = 0;
  fourthMinus.addEventListener("click", () => {
    fourthValue -= 1;
    fourthOut.textContent = fourthValue;
  });
  fourthPlus.addEventListener("click", () => {
    fourthValue += 1;
    fourthOut.textContent = fourthValue;
  });
  fourthReset.addEventListener("click", () => {
    fourthValue = 0;
    fourthOut.textContent = fourthValue;
  });

  // 5
  const fifthClick = document.querySelector('[data-js="t5-open"]');
  const fifthModal = document.querySelector('[data-js="t5-modal"]');
  const fifthSecondClick = document.querySelector('[data-js="t5-close"]');
  const fifthBack = document.querySelector('[data-js="t5-backdrop"]');
  fifthClick.addEventListener("click", () => {
    fifthModal.hidden = false;
  });
  fifthSecondClick.addEventListener("click", () => {
    fifthModal.hidden = true;
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      fifthModal.hidden = true;
    }
  });
  fifthBack.addEventListener("click", (e) => {
    fifthModal.hidden = true;
  });

  // 6
  const sixthTabs = document.querySelectorAll(".tab");
  let sixthCurrentTab = "a";
  sixthTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      document
        .querySelector(`[data-tab="${sixthCurrentTab}"]`)
        .classList.toggle("is-active");
      document
        .querySelector(`[data-pane="${sixthCurrentTab}"]`)
        .classList.toggle("is-active");
      sixthCurrentTab = tab.dataset.tab;
      tab.classList.toggle("is-active");
      document
        .querySelector(`[data-pane="${sixthCurrentTab}"]`)
        .classList.toggle("is-active");
    });
  });

  // 7
  const seventhEnter = document.querySelector('[data-js="t7-input"]');
  const seventhClick = document.querySelector('[data-js="t7-run"]');
  const seventhOut = document.querySelector('[data-js="t7-out"]');
  seventhClick.addEventListener("click", () => {
    let text = seventhEnter.value;
    seventhOut.textContent = text.split("").reverse().join("");
    seventhEnter.value = "";
  });

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
    if (!Number.isNaN(a) && !Number.isNaN(b))
      eightResult.textContent = a + b;
    eightA.value = "";
    eightB.value = "";
  });
  eightMul.addEventListener("click", () => {
    if (eightA.value === "" || eightB.value === "") return;
    let a = Number(eightA.value);
    let b = Number(eightB.value);

    if (!Number.isNaN(a) && !Number.isNaN(b)) {
      eightResult.textContent = eightA.value * eightB.value;
      eightA.value = "";
      eightB.value = "";
    }
  });

  // 9
  const ninthClick = document.querySelector('[data-js="t9-toggle"]');
  const ninthText = document.querySelector('[data-js="t9-text"]');
  ninthClick.addEventListener("click", () => {
    ninthText.hidden = !ninthText.hidden;
    ninthClick.textContent =
      ninthClick.textContent === "Показать" ? "Скрыть" : "Показать";
  });

  // 10
  const tenthRange = document.querySelector('[data-js="t10-range"]');
  const tenthOut = document.querySelector('[data-js="t10-out"]');
  const tenthBox = document.querySelector('[data-js="t10-box"]');
  tenthRange.addEventListener("input", (e) => {
    tenthOut.textContent = e.target.value + "px";
    tenthBox.style.width = tenthOut.value;
    tenthBox.style.height = tenthOut.value;
  });

  // 11
  const eleventhInput = document.querySelector('[data-js="t11-seconds"]');
  const eleventhStart = document.querySelector('[data-js="t11-start"]');
  const eleventhStop = document.querySelector('[data-js="t11-stop"]');
  const eleventhOut = document.querySelector('[data-js="t11-out"]');
  let eleventhSeconds = 0;
  let eleventhInterval = null;
  eleventhStart.addEventListener("click", () => {
    if (eleventhInterval) clearInterval(eleventhInterval);
    eleventhSeconds = Number(eleventhInput.value);
    if (!Number.isNaN(eleventhSeconds)) {
      eleventhInput.value = "";
      eleventhOut.textContent = eleventhSeconds;
      eleventhInterval = setInterval(() => {
        eleventhSeconds--;
        eleventhOut.textContent = eleventhSeconds;
        if (eleventhSeconds <= 0) {
          eleventhOut.textContent = 0;
          clearInterval(eleventhInterval);
          eleventhInterval = null;
        }
      }, 1000);
    }
  });
  eleventhStop.addEventListener("click", () => {
    if (eleventhInterval) {
      clearInterval(eleventhInterval);
      eleventhInterval = null;
    }
  });

  // 12
  const twelfthButton = document.querySelector('[data-js="t12-plus"]');
  const twelfthLabel = document.querySelector('[data-js="t12-label"]');
  const twelfthBar = document.querySelector('[data-js="t12-bar"]');
  let twelfthProgress = 0;
  twelfthButton.addEventListener("click", () => {
    if (twelfthProgress < 100) {
      twelfthProgress += 10;
      twelfthLabel.textContent = twelfthProgress + "%";
      twelfthBar.style.width = twelfthProgress + "%";
    }
  });

  // 13
  const firteenthOut = document.querySelector('[data-js="t13-out"]');
  const firteenthInput = document.querySelector('[data-js="t13-input"]');
  const firteenthKeys = new Set();

  firteenthInput.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      firteenthInput.blur();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.repeat) return;

    firteenthKeys.add(e.key);
    firteenthOut.textContent =
      Array.from(firteenthKeys).join(", ") + " нажаты";
    if (
      e.key === "Control" ||
      e.key === "q" ||
      e.key === "й" ||
      e.key === "Q" ||
      e.key === "Й"
    ) {
      if (
        firteenthKeys.has("Control") &&
        (firteenthKeys.has("q") ||
          firteenthKeys.has("й") ||
          firteenthKeys.has("Q") ||
          firteenthKeys.has("Й"))
      ) {
        firteenthInput.value = "";
      }
    }
  });

  document.addEventListener("keyup", (e) => {
    firteenthKeys.delete(e.key);
    firteenthOut.textContent =
      Array.from(firteenthKeys).join(", ") + " нажаты";
    if (firteenthKeys.size === 0) {
      firteenthOut.textContent = "Ничего не нажато. ";
    }
  });

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
    let fourteenthNext = Math.floor(Math.random() * fourteenthArray.length);
    if (fourteenthNext === fourteenthChoose)
      fourteenthNext = (fourteenthNext + 1) % fourteenthArray.length;
    fourteenthChoose = fourteenthNext;
    fourteenthOut.innerHTML = fourteenthArray[fourteenthChoose];
  });

  // 15
  const fifteenthArea = document.querySelector('[data-js="t15-area"]');
  const fifteenthItem = document.querySelector('[data-js="t15-item"]');
  const fifteenthCoords = document.querySelector('[data-js="t15-coords"]');
  let fifteenthDown = false;
  let fifteenthX;
  let fifteenthY;

  fifteenthItem.addEventListener("mousedown", (e) => {
    const itemRect = fifteenthItem.getBoundingClientRect();
    fifteenthDown = true;
    fifteenthX = e.clientX - itemRect.left;
    fifteenthY = e.clientY - itemRect.top;
  });

  document.addEventListener("mousemove", (e) => {
    const itemRect = fifteenthItem.getBoundingClientRect();
    if (!fifteenthDown) return;
    let areaRect = fifteenthArea.getBoundingClientRect();
    let x = Math.min(
      Math.max(e.clientX - areaRect.left - fifteenthX, 0),
      areaRect.width - itemRect.width
    );
    let y = Math.min(
      Math.max(e.clientY - areaRect.top - fifteenthY, 0),
      areaRect.height - itemRect.height
    );
    fifteenthCoords.textContent = `x: ${x}, y: ${y}`;
    fifteenthItem.style.left = x + "px";
    fifteenthItem.style.top = y + "px";
  });

  document.addEventListener("mouseup", () => {
    fifteenthDown = false;
  });

  // 16
  const sixteenthAnimate = document.querySelector('[data-js="t16-animate"]');
  const sixteenthBox = document.querySelector('[data-js="t16-box"]');
  sixteenthAnimate.addEventListener("click", () => {
    sixteenthBox.classList.add("is-bouncing");
    setTimeout(() => {
      sixteenthBox.classList.remove("is-bouncing");
    }, 1000);
  });

  //17
  function task17() {
    const area = document.querySelector('[data-js="t17-area"]');
    if (!area) return;

    area.innerHTML = "";

    setInterval(() => {
      const maxX = Math.max(0, area.clientWidth - block_size);
      const maxY = Math.max(0, area.clientHeight - block_size);

      const xPosition = Math.floor(Math.random() * maxX);
      const yPosition = Math.floor(Math.random() * maxY);

      const block = document.createElement("div");
      block.className = "target-div";
      block.style.left = xPosition + "px";
      block.style.top = yPosition + "px";

      area.appendChild(block);
    }, spawn_interval);
  }
  task17();

  //18
  const t18area = document.querySelector('[data-js="t18-area"]');
  if (t18area) {
    t18area.style.maxWidth = "100%";
    spawnStars(t18area);
  }

  function spawnStars(area) {
    if (!area) return;

    function scheduleSpawn() {
      setTimeout(() => {
        spawnRunStars(area);
        scheduleSpawn();
      }, 100 + Math.random() * 300);
    }
    scheduleSpawn();
  }

  function spawnRunStars(area) {
    if (!area) return;

    const square = document.createElement("div");
    let bonus = 1;
    square.style.position = "absolute";
    square.style.height = block_size + "px";
    square.style.width = block_size + "px";
    square.style.backgroundColor = "#ff0000";
    square.style.backgroundSize = "100% 100%";
    area.appendChild(square);

    const maxTop = Math.max(0, area.clientHeight - block_size);
    square.style.top = Math.random() * maxTop + "px";
    square.style.left = area.clientWidth + "px";

    if (Math.random() < 0.8) {
      bonus = 5;
    }
    speedStar(square, area, bonus * (1 + Math.random() * 2));
  }

  function speedStar(square, area, baseSpeed) {
    if (!square || !area) return;

    let lastTime = null;
    let speed = baseSpeed;
    let accel = 0;

    function frame(timestamp) {
      if (!square.isConnected) return;

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
      square.style.left = left + "px";

      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  //19
  const t19Area = document.querySelector('[data-js="t19-area"]');
  let animationFrame19 = null;
  let blocks19 = [];

  function spawnBlock19() {
    if (!t19Area) return;

    const areaWidth = t19Area.clientWidth;
    const areaHeight = t19Area.clientHeight;

    const maxY = Math.max(0, areaHeight - block_size);
    const y = Math.floor(Math.random() * maxY);

    const block = document.createElement("div");
    block.className = "target-div";
    block.style.backgroundColor = "purple";
    block.style.position = "absolute";
    block.style.width = block_size + "px";
    block.style.height = block_size + "px";
    block.style.top = y + "px";
    block.style.left = areaWidth + "px";

    t19Area.appendChild(block);

    blocks19.push({
      element: block,
      x: areaWidth,
      y: y,
      width: block_size,
      height: block_size,
    });
  }

  function updateBlocks19() {
    if (!t19Area) return;

    const areaWidth = t19Area.clientWidth;

    for (let i = blocks19.length - 1; i >= 0; i--) {
      const blockData = blocks19[i];
      blockData.x -= 3;

      if (blockData.x + blockData.width < 0) {
        blockData.element.remove();
        blocks19.splice(i, 1);
      } else {
        blockData.element.style.left = blockData.x + "px";
      }
    }

    animationFrame19 = requestAnimationFrame(updateBlocks19);
  }

  if (t19Area) {
    if (window.spawnInterval19) clearInterval(window.spawnInterval19);
    if (animationFrame19) cancelAnimationFrame(animationFrame19);
    blocks19 = [];
    t19Area.innerHTML = "";

    window.spawnInterval19 = setInterval(spawnBlock19, spawn_interval);
    updateBlocks19();
  }

  //20
  const t20Area = document.querySelector('[data-js="t20-area"]');
  const t20Score = document.querySelector('[data-js="t20-score"]');
  let score20 = 0;
  let spawnInterval20 = null;

  function spawnBlock20() {
    if (!t20Area) return;

    const areaWidth = t20Area.clientWidth;
    const areaHeight = t20Area.clientHeight;
    const maxX = Math.max(0, areaWidth - block_size);
    const maxY = Math.max(0, areaHeight - block_size);
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    const block = document.createElement("div");
    block.className = "target-div";
    block.style.backgroundColor = "orange";
    block.style.position = "absolute";
    block.style.width = block_size + "px";
    block.style.height = block_size + "px";
    block.style.left = x + "px";
    block.style.top = y + "px";
    block.style.cursor = "pointer";

    block.addEventListener("click", function clickHandler() {
      score20++;
      t20Score.textContent = score20;
      this.remove();
    });

    t20Area.appendChild(block);
  }

  if (t20Area) {
    if (spawnInterval20) clearInterval(spawnInterval20);
    t20Area.innerHTML = "";
    score20 = 0;
    t20Score.textContent = "0";

    spawnInterval20 = setInterval(spawnBlock20, 800);
  }

  //21
  let playing21 = false;
  let spawnTimeout21 = null;
  let animationFrame21 = null;
  let blocks21 = [];

  const t21area = document.querySelector('[data-js="t21-area"]');
  const t21scoretab = document.querySelector('[data-js="t21-score"]');
  const t21livestab = document.querySelector('[data-js="t21-lives"]');
  const t21GameOver = document.querySelector('[data-js="t21-game-over"]');
  const t21Restart = document.querySelector('[data-js="t21-restart"]');

  function spawnBlock21() {
    if (!playing21 || !t21area) return;

    const areaWidth = t21area.clientWidth;
    const areaHeight = t21area.clientHeight;
    const maxY = Math.max(0, areaHeight - block_size);
    const y = Math.floor(Math.random() * maxY);

    const block = document.createElement("div");
    block.className = "target-div";
    block.style.position = "absolute";
    block.style.width = block_size + "px";
    block.style.height = block_size + "px";
    block.style.backgroundColor = "#ff4444";
    block.style.top = y + "px";
    block.style.left = areaWidth + "px";
    block.style.cursor = "pointer";

    block.addEventListener("click", (e) => {
      e.stopPropagation();
      if (!playing21) return;
      const index = blocks21.findIndex((b) => b.element === block);
      if (index !== -1) {
        blocks21.splice(index, 1);
        block.remove();
        t21scoretab.textContent = Number(t21scoretab.textContent) + 1;
      }
    });

    t21area.appendChild(block);

    blocks21.push({
      element: block,
      x: areaWidth,
      y: y,
      width: block_size,
      height: block_size,
    });
  }

  function updateBlocks21() {
    if (!playing21 || !t21area) {
      animationFrame21 = requestAnimationFrame(updateBlocks21);
      return;
    }

    const areaWidth = t21area.clientWidth;

    for (let i = blocks21.length - 1; i >= 0; i--) {
      const blockData = blocks21[i];
      blockData.x -= 3;

      if (blockData.x + blockData.width < 0) {
        blockData.element.remove();
        blocks21.splice(i, 1);

        const lives = Number(t21livestab.textContent) - 1;
        t21livestab.textContent = lives;

        if (lives <= 0) {
          gameOver21();
          return;
        }
      } else {
        blockData.element.style.left = blockData.x + "px";
      }
    }

    animationFrame21 = requestAnimationFrame(updateBlocks21);
  }

  function gameOver21() {
    playing21 = false;

    if (spawnTimeout21) {
      clearTimeout(spawnTimeout21);
      spawnTimeout21 = null;
    }

    if (t21GameOver) {
      t21GameOver.hidden = false;
    }
  }

  function startGame21() {
    if (spawnTimeout21) clearTimeout(spawnTimeout21);
    if (animationFrame21) cancelAnimationFrame(animationFrame21);

    blocks21.forEach((block) => block.element.remove());
    blocks21 = [];

    t21scoretab.textContent = 0;
    t21livestab.textContent = 3;

    if (t21GameOver) {
      t21GameOver.hidden = true;
    }

    t21area.innerHTML = "";

    playing21 = true;

    if (animationFrame21) cancelAnimationFrame(animationFrame21);
    updateBlocks21();

    function scheduleSpawn() {
      if (!playing21) return;
      spawnBlock21();
      spawnTimeout21 = setTimeout(scheduleSpawn, 500 + Math.random() * 500);
    }

    spawnTimeout21 = setTimeout(scheduleSpawn, 500);
  }

  if (t21area) {
    t21area.addEventListener("click", (e) => {
      if (e.target.closest('[data-js="t21-game-over"]')) return;
      if (e.target.closest('[data-js="t21-restart"]')) return;

      if (!playing21) {
        startGame21();
      }
    });
  }

  if (t21Restart) {
    t21Restart.addEventListener("click", (e) => {
      e.stopPropagation();
      startGame21();
    });
  }

  if (t21area) {
    t21area.innerHTML =
      "<div style='position: relative; top: 45%; text-align: center;'>Нажмите чтобы начать</div>";
  }
});
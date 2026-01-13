function checkProbabilityTheory(count) {
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * 900) + 100;

    if (randomNumber % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  let evenPercentage = (evenCount / count) * 100;
  let oddPercentage = (oddCount / count) * 100;

  let evenToOddPercentage = 0;
  if (oddCount !== 0) {
    evenToOddPercentage = (evenCount / oddCount) * 100;
  }

  console.log('Кількість згенерованих чисел: ' + count);
  console.log('Парних чисел: ' + evenCount);
  console.log('Непарних чисел: ' + oddCount);
  console.log('Відсоток парних: ' + evenPercentage.toFixed(2) + '%');
  console.log('Відсоток непарних: ' + oddPercentage.toFixed(2) + '%');
  console.log('Відсоток парних до непарних: ' + evenToOddPercentage.toFixed(2) + '%' );
}

checkProbabilityTheory(1000);

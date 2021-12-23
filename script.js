const range = document.querySelector('#range');

range.addEventListener('input', (e) => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  label.innerText = value;

  const range_width = getComputedStyle(e.target).getPropertyValue('width');
  const label_width = getComputedStyle(label).getPropertyValue('width');

  console.log(range_width.length);
  console.log(e.target);

  const num_width = +range_width.substring(0, range_width.length - 2);
  const num_label_width = +label_width.substring(0, label_width.length - 2);

  const min = +e.target.min;
  const max = +e.target.max;

  const left = value * (num_width / max) - num_label_width / 2;

  label.style.left = `${left}px`;
});

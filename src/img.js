const center = document.querySelector(".center");
const number = document.querySelectorAll(".number");

const bgImages = [
  "url(https://mymodernmet.com/wp/wp-content/uploads/2020/10/cooper-baby-corgi-dogs-8.jpg)",
  "url(https://fsa.zobj.net/crop.php?r=AIkSCu2agn0Y_hzUqDu5dHF8G2Xv02-sbrjxJEyaLoFo9zEXJ0mONDnTeEEx_m88u-AQC8Or7dvMnyF4G_7ymHyNC0ZQHdaAUv2mrjkxEjrm04cgC8WevIpqEK1dOYOoVOrLJnnnPKzeTIni)",
  "url(https://dogtime.com/assets/uploads/gallery/pembroke-welsh-corgi-dog-breed-pictures/prance-8.jpg)",
  "url(https://upload.wikimedia.org/wikipedia/commons/2/2b/WelshCorgi.jpeg)",
  "url(https://i.pinimg.com/originals/97/fc/0a/97fc0a5c0f407b3ee217602b0c556ee5.jpg)",
  "url(https://mymodernmet.com/wp/wp-content/uploads/2020/10/cooper-baby-corgi-dogs-12.jpg)",
  "url(https://mymodernmet.com/wp/wp-content/uploads/2020/10/cooper-baby-corgi-dogs-3.jpg)",
  "url(https://i.pinimg.com/564x/8e/18/44/8e18443d7174bb73860b19c68b2c0049.jpg)",
  "url(https://i.pinimg.com/564x/f3/0a/40/f30a40b70296f60baf803200be01f33f.jpg)",
  "url(https://i.pinimg.com/originals/b4/20/da/b420daf65a3405a4ea3438123bd924fa.jpg)",
];

const handler = (index) => {
  const { style } = center;
  style.backgroundImage = bgImages[index];
};

number.forEach((btn, index) => {
  btn.addEventListener("mouseover", (e) => {
    handler(index);
  });
});

let list = [];
$(() => {
   $.getJSON("data.json", (data) => {
      list = data.data.children.map((d) => d.data.title);
      newThought();
   });

   $(document).click(() => {
      newThought();
   });

   $(document).keydown((e) => {
      if (e.which === 32) {
         newThought();
      }
   });
});

const newThought = () => {
   const randomThought = list[Math.floor(Math.random() * list.length)];
   $("#text").html(randomThought);

   const bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
   const textColor = bgColor > "#888888" ? "#000" : "#fff";

   $("body").css({
      "background-color": bgColor,
      color: textColor,
   });
};

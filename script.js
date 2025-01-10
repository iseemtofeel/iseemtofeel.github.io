function displayText(buttonId) {
  // Hide all buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => (button.style.display = 'none'));

  // Select the text container
  const textContainer = document.getElementById('text-container');
  textContainer.style.display = 'block';

  // Add the appropriate text based on the button clicked
  let text = '';
  switch (buttonId) {
    case 1:
      text = `
        The physical, material world shapes who we are, and how we approach life.
        In a broader sense, the novel probes the idea of a man’s spiritual diet,
        his intellectual and emotional nourishment. What a person consumes—whether food or ideas,
        principles or experiences—shapes the very fiber of their being.
      `;
      break;
    case 2:
      text = `
        "I can't go on. I'll go on." Josef K. realized that his situation was utterly absurd,
        that there was no purpose, no escape from the labyrinth of the court’s influence.
        Yet, the thought of giving up was equally unbearable. Each step he took
        was a mixture of confusion and helplessness.
      `;
      break;
    case 3:
      text = `
        The world breaks everyone, and afterward, some are strong at the broken places.
        But those that will not break, it kills. It kills the very good and the very gentle
        and the very brave impartially. If you are none of these you can be sure that it will kill you too,
        but there will be no special hurry. The process of being broken,
        of being destroyed, is what makes a person stronger.
      `;
      break;
    case 4:
      text = `
        Garcin: "But I’ve got to be clear about one thing.
        I’ve been trying to figure it out, and I think I know now.
        You see, it’s not that I’m afraid of being alone.
        It’s just that I’ve never been alone. Always there have been other people.
        So I thought that perhaps it’s true after all."
        Estelle: "What’s true? What are you talking about?"
        Garcin: "I see now that hell isn’t other people—hell is myself."
        Inès: "What do you mean by that?"
        Garcin: "I mean... hell is other people."
      `;
      break;
    case 5:
      text = `
        The more a man is seen, the less he exists. It's the thing about being consumed
        by the gaze of others—you become a part of the system. You’re reduced to an object,
        an instrument, to be used and then discarded. Those who are truly powerful in this society
        are the ones you never see. They control the masses not by presence,
        but by keeping themselves hidden, invisible in the shadows. The very essence of individuality
        is eroded when one is constantly observed, their every thought and action being dictated.
        The pleasure they promise is the chain that binds you tighter.
      `;
      break;
    case 6:
      text = `
        What I feel is a vast emptiness. A dull ache that never quite goes away.
        It’s not hunger, though sometimes it feels like that. It’s not grief, though it’s close.
        It’s not even loneliness—it’s a strange kind of isolation,
        the kind where you are surrounded by people yet remain untouched by them.
        There’s no space left for feeling anything truly human anymore.
        Emotions are like ghosts now, whispers of something I once had, but cannot recall.
        In this world, feeling has become dangerous—because feelings are personal,
        and in a society that demands control, personal experiences are rebellion.
      `;
      break;
  }

  // Update the text container
  textContainer.innerHTML = `<p>${text}</p>`;
}

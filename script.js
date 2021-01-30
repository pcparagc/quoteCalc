const prompt = require("prompt-sync")();

const randomNum = () => {
  return Math.floor(Math.random() * 5);
};

let input = prompt(
  "Please enter your choice:\n 1. Motivational\n 2. Life\n 3.Funny\n"
);
let num = randomNum();

switch (input) {
  case "1":
    console.log("You have choosen Motivation....");
    switch (num) {
      case 1:
        console.log(
          `"All our dreasms can come true, if we have the courage to pursue them." – Walt Disney`
        );
        break;
      case 2:
        console.log(
          `“The secret of getting ahead is getting started.” – Mark Twain`
        );
        break;
      case 3:
        console.log(
          `The best time to plant a tree was 20 years ago. The second best time is now.” – Chinese Proverb`
        );
        break;
      case 4:
        console.log(
          `Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.” – Joss Whedon`
        );
        break;
      case 5:
        console.log(
          `Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.”― Neil Gaiman`
        );
        break;
      default:
        console.log("Ooops...Something went wrong!!");
    }
    break;

  case "2":
    console.log("You have choosen Life....");

    switch (num) {
      case 1:
        console.log(
          `Life is what happens when you're busy making other plans." -John Lennon'`
        );
        break;
      case 2:
        console.log(
          `If life were predictable it would cease to be life, and be without flavor." -Eleanor Roosevelt`
        );
        break;
      case 3:
        console.log(
          `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking." -Steve Jobs`
        );
        break;
      case 4:
        console.log(
          `"The way to get started is to quit talking and begin doing." -Walt Disney`
        );
        break;
      case 5:
        console.log(
          `'If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough." -Oprah Winfrey'`
        );
        break;
      default:
        console.log("Ooops...Something went wrong!!");
    }
    break;

  case "3":
    console.log("You have choosen Funny....");
    switch (num) {
      case 1:
        console.log(
          `“I’m sick of following my dreams, man. I’m just going to ask where they’re going and hook up with ’em later.”
          —Mitch Hedberg `
        );
        break;
      case 2:
        console.log(
          ` “Gentlemen, you can’t fight in here. This is the war room.”
          —President Merkin Muffley (Peter Sellers), Dr. Strangelove`
        );
        break;
      case 3:
        console.log(
          `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking." -Steve Jobs`
        );
        break;
      case 4:
        console.log(
          ` “My mother always used to say: The older you get, the better you get, unless you’re a banana.”`
        );
        break;
      case 5:
        console.log(
          `“Halloween is the beginning of the holiday shopping season. That’s for women. The beginning of the holiday shopping season for men is Christmas Eve.”`
        );
        break;
      default:
        console.log("Ooops...Something went wrong!!");
    }
    break;

  default:
    console.log("Please enter  valid input, thankyou!");
    break;
}


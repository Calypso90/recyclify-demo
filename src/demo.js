const { OpenAI } = require(`openai`);

const apiKey = "replace me";
const openai = new OpenAI({ apiKey });

// https://ibb.co/84qYZMZ
// https://ibb.co/pKxjM82
// https://ibb.co/9yLh5Tk

export async function Demo() {
  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "What material is the item in this image made of?",
          },
          {
            type: "image_url",
            image_url: {
              url: `https://ibb.co/2FCVxXM`,
            },
          },
        ],
      },
    ],
  });
  return (
    <div>
      <img src="https://ibb.co/2FCVxXM"></img>
      <p>${response.choices[0]}</p>
    </div>
  );
}

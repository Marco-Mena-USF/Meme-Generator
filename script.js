let memeContainer = document.getElementById('memeContainer');

function generateMeme() {
  let imageUrl = document.getElementById('imageUrlInput').value;
  let topText = document.getElementById('topTextInput').value;
  let bottomText = document.getElementById('bottomTextInput').value;

  if (imageUrl === '' || topText === '' || bottomText === '') {
    alert('Please enter the image URL, top text, and bottom text!');
    return;
  }

  let meme = createMeme(imageUrl, topText, bottomText);
  memeContainer.appendChild(meme);
}

function createMeme(imageUrl, topText, bottomText) {
  let meme = document.createElement('div');
  meme.className = 'meme';

  let image = document.createElement('img');
  image.src = imageUrl;

  let topTextElement = document.createElement('div');
  topTextElement.className = 'text top-text';
  topTextElement.textContent = topText;

  let bottomTextElement = document.createElement('div');
  bottomTextElement.className = 'text bottom-text';
  bottomTextElement.textContent = bottomText;

  let deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.textContent = 'x';
  deleteButton.onclick = function() {
    memeContainer.removeChild(meme);
  };

  meme.appendChild(image);
  meme.appendChild(topTextElement);
  meme.appendChild(bottomTextElement);
  meme.appendChild(deleteButton);

  return meme;
}

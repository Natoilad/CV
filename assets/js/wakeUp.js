window.onload = async function () {
  try {
    const response = await fetch('https://sendformtemplate.onrender.com', {
      method: 'GET',
    });
  } catch (error) {
    console.log('Error', error);
  }
};

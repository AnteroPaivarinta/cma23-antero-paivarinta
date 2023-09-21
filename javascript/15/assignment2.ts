async function waitFor(milliseconds:any) {
    const delay = new Promise((resolve) => {
      setTimeout(() => resolve({}), milliseconds);
    });
    await delay;
  }

  async function countSeconds() {
    for (let i = 0; i <= 10; i++) {
      console.log(i);
      await waitFor(1000);
    }
  }

  countSeconds();
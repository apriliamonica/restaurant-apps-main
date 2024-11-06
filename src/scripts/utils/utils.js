class Utils {
  static getRiview(id, name, review, date) {
    return {
      id,
      name,
      review,
      date,
    };
  }

  static showLoading(element) {
    element.style.display = 'block';
  }

  static hideLoading(element) {
    element.style.display = 'none';
  }

  static sleep(response = null) {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(response);
      }, 1000)
    );
  }
}

export default Utils;

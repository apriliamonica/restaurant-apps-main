// class loading {
//   static showLoading(element) {
//     element.style.display = 'block';
//   }

//   static hideLoading(element) {
//     element.style.display = 'none';
//   }

//   static async getNotesnonArchived() {
//     Utils.hideLoading(notesList);
//     Utils.showLoading(loading);
//     try {
//       const response = await fetch(`${BASE_URL}/notes`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       await Utils.sleep();
//       const responseJson = await response.json();
//       return responseJson.data;
//     } catch (error) {
//       alert('gagal mendapatkan unarchived notes');
//     } finally {
//       Utils.hideLoading(loading);
//       Utils.showLoading(notesList);
//     }
//   }
// }

function create_images(BookGenre, Array) {
    fetch("https://openlibrary.org/subjects/" + BookGenre + ".json")
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.works.length; i++) {
                if (data.works[i].cover_id === null) {
                    continue;
                }
                let returnValue =
                    "https://covers.openlibrary.org/b/id/" +
                    data.works[i].cover_id +
                    "-M.jpg";

                Array.push(returnValue);
            }

        });
}
export { create_images }
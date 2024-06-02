import DOMPurify from "dompurify";

// TODO: make this a react component and stop using innerHTML
const markdownParser = (data) => {
  if (!data) return "";

  let result = String(data);

  let links = result.match(/\[.*?\)/g);

  if (links != null && links.length > 0) {
    for (let link of links) {
      let txt = link.match(/\[(.*?)\]/)[1];
      let url = link.match(/\((.*?)\)/)[1];
      result = result.replace(
        link,
        '<a class="review-slide__content--link" target="_blank" rel="noopener noreferrer" href="' +
          url +
          '">' +
          txt +
          "</a>"
      );
    }
  }

  return DOMPurify.sanitize(result, { ADD_ATTR: ["target"] });
};

export default markdownParser;

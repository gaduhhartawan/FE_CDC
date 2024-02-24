import { Jodit } from "jodit-react";

const jeditor = Jodit.make('#editor', {
    buttons: ['bold', 'italic', 'underline', '|', 'ul', 'ol']
  });

export default jeditor;
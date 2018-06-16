export const EditIcon = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 469.331 469.331" onClick={props.editStatus}>
    <path d="M438.931 30.403c-40.4-40.5-106.1-40.5-146.5 0l-268.6 268.5c-2.1 2.1-3.4 4.8-3.8 7.7l-19.9 147.4c-.6 4.2.9 8.4 3.8 11.3 2.5 2.5 6 4 9.5 4 .6 0 1.2 0 1.8-.1l88.8-12c7.4-1 12.6-7.8 11.6-15.2-1-7.4-7.8-12.6-15.2-11.6l-71.2 9.6 13.9-102.8 108.2 108.2c2.5 2.5 6 4 9.5 4s7-1.4 9.5-4l268.6-268.5c19.6-19.6 30.4-45.6 30.4-73.3s-10.8-53.7-30.4-73.2zm-141.3 33l45.1 45.1-245.1 245.1-45.1-45.1 245.1-245.1zm-136.7 353.4l-44.1-44.1 245.1-245.1 44.1 44.1-245.1 245.1zm263.9-264.4l-107.9-107.9c13.7-11.3 30.8-17.5 48.8-17.5 20.5 0 39.7 8 54.2 22.4s22.4 33.7 22.4 54.2c0 18.1-6.2 35.1-17.5 48.8z" />
  </svg>
);

EditIcon.defaultProps = {
  editStatus: () => { },
};

EditIcon.PropTypes = {
  editStatus: PropTypes.func,
};

export const TickIcon = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={props.editStatus}>
    <path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" />
  </svg>
);

TickIcon.defaultProps = {
  editStatus: () => { },
};

TickIcon.PropTypes = {
  editStatus: PropTypes.func,
};

export const CloseIcon = props => (
  <svg xmlns="http://www.w3.org/2000/svg" className="close-icon" viewBox="0 0 64 64" onClick={props.itemRemoval}>
    <path fill="#1D1D1B" d="M28.941 31.786L.613 60.114a2.014 2.014 0 1 0 2.848 2.849l28.541-28.541 28.541 28.541c.394.394.909.59 1.424.59a2.014 2.014 0 0 0 1.424-3.439L35.064 31.786 63.41 3.438A2.014 2.014 0 1 0 60.562.589L32.003 29.15 3.441.59A2.015 2.015 0 0 0 .593 3.439l28.348 28.347z" />
  </svg>
);

CloseIcon.defaultProps = {
  itemRemoval: () => { },
};

CloseIcon.PropTypes = {
  itemRemoval: PropTypes.func,
};

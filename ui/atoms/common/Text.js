const Text = ({ content, HtmlTag = 'div', className = '', ...rest }) => (
  <HtmlTag {...{ className, ...rest }}>{content}</HtmlTag>
);

export default Text;

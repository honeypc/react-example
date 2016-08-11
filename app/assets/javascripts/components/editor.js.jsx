//versus extends https://toddmotto.com/react-create-class-versus-component/
const propTypes = {
  type: React.PropTypes.string
}

const defaultProps = {
  type: 'text'
}

class Editor extends React.Component {

  constructor(props) {
    super(props);
  }

  detectTypeRender(){
    const { type, className, children, ...props } =
      this.props;
    const [bsProps, elementProps] = utils.bootstrapUtils.splitBsProps(props);
    
    if (type == 'text') {
      return (<input type="{ this.props.text }" />)
    }
  }

  render () { 
    this.detectTypeRender()
    return (
      <div>{this.detectTypeRender()}</div>
    )
  }
  
}

Editor.propTypes = propTypes;
Editor.defaultProps = defaultProps;
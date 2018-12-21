constructor() {
    super()
    this.setTransition = this.setTransition.bind(this)
    this.state = { transition: null }
}

<GLTransitionOverlay transition={this.state.transition} />;

setTransition(dir) {
    console.log('Set transition', dir)
    this.setState({ transition: dir })
}
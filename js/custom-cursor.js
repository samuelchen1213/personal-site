const updateProperties = (elem, state) => {
    elem.style.setProperty('--x', `${state.x}px`)
    elem.style.setProperty('--y', `${state.y}px`)
    elem.style.setProperty('--width', `${state.width}px`)
    elem.style.setProperty('--height', `${state.height}px`)
    elem.style.setProperty('--radius', state.radius)
    elem.style.setProperty('--scale', state.scale)
    elem.style.setProperty('--color', state.color)
}
  
  document.querySelectorAll('.cursor').forEach(cursor => {
    let onElement;
  
    const createState = e => {
      const defaultState = {
        x: e.clientX,
        y: e.clientY,
        radius: '50%',
      }

      if (onElement) {
        defaultState.width = 45;
        defaultState.height = 45;
        defaultState.color = '#cc2255';
      } else {
        defaultState.width = 35;
        defaultState.height = 35;
        defaultState.color = '#b55400';
      }
      return defaultState;
    }
  
    document.addEventListener('mousemove', e => {
      const state = createState(e);
      updateProperties(cursor, state);
    })

    // $(document).click(()=>(onElement = true));
  
    document.querySelectorAll('a, button, i, .close').forEach(elem => {
      elem.addEventListener('mouseenter', ()=>(onElement = true));
      elem.addEventListener('mouseleave', ()=>(onElement = false));
    })
  })
  
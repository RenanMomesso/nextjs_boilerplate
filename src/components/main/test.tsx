import {render,screen} from '@testing-library/react';

import Main from '.';

describe('<Main/>', ()=>{
    it('should render the heading', () => {
        const {container} = render(<Main/>);
        console.log("CONTAINER", container)
        expect(screen.getByRole('heading', {name:/react avançado/i})).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()
    })
})

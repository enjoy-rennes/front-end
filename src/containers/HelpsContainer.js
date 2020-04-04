// DEPENDENCY
import React from 'react';

// COMPONENT
import HelpListComponent from '../components/list/HelpList';
import HelpsFormComponent from '../components/form/HelpsForm';

// DATA
import { getHelpsFetch } from '../fetch/help';

// COMPONENTS
import RowLayout from '../components/layout/RowLayout';

export default class HelpsContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            helps: undefined,
        }
    }

    componentDidMount = () => {
        this.setState({ helps: getHelps });
    }

    render() {
        const { helps } = this.state;
        return (
            <div className='help-container page'>
                <RowLayout>
                    <HelpsFormComponent />
                    {helps &&
                        <HelpListComponent data={helps} />
                    }
                </RowLayout>
            </div>
        );
    }
}
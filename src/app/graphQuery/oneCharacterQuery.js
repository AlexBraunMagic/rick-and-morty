import { gql } from '@apollo/client';

export default gql`
    query($id: ID!) {
        character(id: $id) {
            name
            status
            species
            type
            gender
            image
            origin {
                name
                type
                dimension
            }
            location {
                name
                type
                dimension
            }
            episode {
                id
                name
                episode
                air_date
            }
        
        }      
    }
`;
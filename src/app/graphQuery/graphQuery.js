import { gql } from '@apollo/client';

export default gql`
    query($page: Int, $status: String, $species: String, $type: String, $gender: String) {
        characters(page: $page, filter: {status: $status, species: $species, type: $type, gender: $gender}) {
            info { 
                count
                pages
                next
                prev
            }
            results {
                id
                name
                status
                species
                type
                gender
                location {
                    id
                }
                image
            }
        }      
    }
`;
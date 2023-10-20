// import { useState } from 'react';
// import { Box, Container } from "@chakra-ui/react"
// import { Input } from '@chakra-ui/react'
// import { ApiData } from '../lib/Api';
// import LayouteRight from './LayoutRight';
// import Layoute from './Layoute';
// // import { FaSearch } from "react-icons/fa";


// const Search = () => {
//     const [search, setSearch] = useState('');
//     const [searchResult, setSearchResult] = useState([]);
//     const handleSearch = async (query) => {
//         try {
//             const response = await ApiData.get(`/thread=${query}`);
//             setSearchResult(response.data);
//             console.log(response.data);
//         } catch (error) {
//             console.error("Error fetching search results:", error);
//         }
//     };
//     const handleSearchthread = (e: React.ChangeEvent<HTMLInputElement>) => {
//         e.preventDefault()
//         const searching = e.target.value
//         setSearch(searching)
//         handleSearch(searching)
//         console.log(search)
//     }
//     console.log("searchResultsearchResult", searchResult)
//     return (
//         <>
//             <Container maxW='container.2xl' display={'flex'} justifyContent={'center'} >
//                 <Box display={'flex'} width={"1500px"} justifyContent={'space-between'} position={"relative"}>
//                     <Box color={'black'} flex={'0,5'} position={"fixed"} >
//                         <Layoute />

//                     </Box>
//                     <Box position={"relative"} left={'300px'} display={'flex'} width={"80%"}>
//                         <Box color={'black'} flex={'1'} position={"relative"}>
//                             <Box>
//                                 <Input placeholder='Search' value={search} type='text' name="search" onChange={handleSearchthread} />
//                             </Box>

//                             <Box>
//                                 <ul>
//                                     {searchResult.map((result, index) => (
//                                         <li key={index}>{result.content}</li>
//                                     ))}
//                                 </ul>
//                             </Box>
//                         </Box>
//                         <Box flex={'0.5'} position={"relative"}>
//                             <LayouteRight />
//                         </Box>
//                     </Box>
//                 </Box>


//             </Container>




//             {/* <Container>
//                 <Box>
//                     <Input placeholder='Search' value={search} type='text' name="search" onChange={handleSearchthread} />
//                 </Box>
//                 <Box>
//                     <ul>
//                     {searchResult.map((result, index) => (
//                         <li key={index}>{result.title}</li>
//                     ))}
//                 </ul>
//                 </Box>

//             </Container> */}
//         </>

//     )
// }

// export default Search

import React from 'react'

const Search = () => {
  return (
    <div>Search</div>
  )
}

export default Search
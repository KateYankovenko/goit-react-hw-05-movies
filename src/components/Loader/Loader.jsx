import { Box } from 'components/Box';
import { Bars } from 'react-loader-spinner';


export const Loader = () => <Box position="absolute"
                                top='50%'
                                left='50%'
                                as="div">
                                <Bars color="#9458d1" height={150} width={150} ariaLabel='loading' />
                            </Box>
                            
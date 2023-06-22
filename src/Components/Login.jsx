import React from 'react';
import {
  Box,
  Container,
  Flex,
  Text,
  Button,
  IconButton,
  Input,
  Checkbox,
  Image,
} from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGoogle } from 'react-icons/fa';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "../App.css"

function Login() {
  return (
    <Box bg="primary">
      <Container
        p={3}
        my={5}
        height="calc(100% - 73px)"
        className="h-custom"
        maxW="container.xl"
      >
        <Flex   direction={['column', 'row']} align="center">
          <Box className='boxExp' flex={['100%', '50%']} mb={[4, 0]}>
            <Carousel
              showStatus={false}
              showThumbs={false}
              infiniteLoop
              autoPlay
              interval={2000}
            >
              <div>
                <Image className='slider-image' src="https://pbs.twimg.com/media/FLQPdnrWUAAkJbi.png" alt="Slider Image 1" />
              </div>
              <div>
                <Image className='slider-image' src="https://www.sandler.com/wp-content/uploads/2022/10/AdobeStock_104891480.jpeg" alt="Slider Image 2" />
              </div>
              <div>
                <Image className='slider-image' src="https://diskominfo.dharmasrayakab.go.id/photos/foto/220817091317_Komunikasi-dan.jpeg" alt="Slider Image 3" />
              </div>
            </Carousel>
          </Box>
          <Box col="4" md="6">
            <Flex direction="column" align="center" justify="center" h="100%">
              <Box col="10" md="6">
                <Image
                  src="https://app.salescaptain.com/static/media/loginLogo.3814067f45867b0a416c.png"
                  alt="SalesCaptain Logo"
                  className="circle-image"
                />
              </Box>
              <Flex align="center" justify="center">
                <Text className="lead fw-normal mb-0 me-3">Sign in with</Text>
                <IconButton
                  icon={<FaFacebookF />}
                  aria-label="Sign in with Facebook"
                  size="md"
                  className="me-2"
                />
                <IconButton
                  icon={<FaTwitter />}
                  aria-label="Sign in with Twitter"
                  size="md"
                  className="me-2"
                />
                <IconButton
                  icon={<FaLinkedinIn />}
                  aria-label="Sign in with LinkedIn"
                  size="md"
                  className="me-2"
                />
              </Flex>
              <Flex align="center" my={4}>
                <Text className="text-center fw-bold mx-3 mb-0">Or</Text>
              </Flex>
              <Input
                variant="outline"
                mb={4}
                placeholder="Email address"
                size="lg"
              />
              <Input
                variant="outline"
                mb={4}
                placeholder="Password"
                type="password"
                size="lg"
              />
              <Flex justify="space-between" mb={4}>
                <Checkbox flexShrink={0} value="" id="flexCheckDefault" />
                <Text>
                  <a href="#!">Forgot password?</a>
                </Text>
              </Flex>
              <Flex direction="column" align="center" mt={4} pt={2}>
                <Button className="mb-0 px-5" size="lg">
                  Login
                </Button>
                <Text className="small fw-bold mt-2 pt-1 mb-2">
                  Don't have an account?{' '}
                  <a href="#!" className="link-danger">
                    Register
                  </a>
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="space-between"
          py={4}
          px={{ base: 4, xl: 5 }}
          bg="primary"
          color="white"
        >
          <Text mb={{ base: 3, md: 0 }}>
            &copy; 2020. All rights reserved.
          </Text>
          <Flex>
            <IconButton
              icon={<FaFacebookF />}
              aria-label="Facebook"
              color="white"
              size="md"
              mx={3}
            />
            <IconButton
              icon={<FaTwitter />}
              aria-label="Twitter"
              color="white"
              size="md"
              mx={3}
            />
            <IconButton
              icon={<FaGoogle />}
              aria-label="Google"
              color="white"
              size="md"
              mx={3}
            />
            <IconButton
              icon={<FaLinkedinIn />}
              aria-label="LinkedIn"
              color="white"
              size="md"
              mx={3}
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Login;

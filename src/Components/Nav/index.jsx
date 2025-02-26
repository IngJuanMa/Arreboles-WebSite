import React from 'react'
import "./Nav.css"
import { GoHomeFill } from "react-icons/go";
import { FaBagShopping } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import { motion } from 'framer-motion';

const bajar = (delay) => {
    return {
        initial: {
            y: "-100%",
            opacity: 0,
            hidden: "hidden",
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                delay: delay,
            },
        },
    };
};

const Nav = () => {
    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className='barranav'>
            <motion.a
                variants={bajar(0.3)}
                initial="initial"
                whileInView="animate">
                <GoHomeFill size={30} />
            </motion.a>

            <motion.a
                variants={bajar(0.5)}
                initial="initial"
                whileInView="animate">
                <FaBagShopping size={30} />
            </motion.a>

            <motion.a
                variants={bajar(0.7)}
                initial="initial"
                whileInView="animate">
                <FaCircleUser size={30} />
            </motion.a>
        </motion.nav>
    )
}

export default Nav
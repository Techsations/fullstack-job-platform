import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import programmingSkills from '../SkillsApi';
import { useFormik } from 'formik';
import * as yup from 'yup'
import NavBar from '../NavBar';
import Banner from '../Banner';
import SideBar from './SideBar';
import ContentContainer from '../ContentContainer';
import axios from 'axios';
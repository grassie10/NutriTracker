import { render, screen, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from "../App";
import SearchBar  from '../components/SearchBar';
import NutrientCount from "../components/NutrientCount";
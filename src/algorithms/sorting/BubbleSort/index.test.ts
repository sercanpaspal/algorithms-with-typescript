import BubbleSort from './index';
import { multipleRandomSortingTest } from '../../../utils';

describe('sorting', multipleRandomSortingTest(100, 'bubble sort', BubbleSort));
import MergeSort from './index';
import { multipleRandomSortingTest } from '../../../utils';

describe('sorting', multipleRandomSortingTest(100, 'merge sort', MergeSort));
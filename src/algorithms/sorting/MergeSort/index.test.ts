import MergeSort from './index';
import { multipleRandomSortingTest } from '../../../utils';

describe('sorting', multipleRandomSortingTest('merge sort', MergeSort));
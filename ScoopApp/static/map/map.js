var rsr = Raphael('rsr', '800', '1000');

var connaught = rsr.path(" M619.9,201.8c6.8,0.3,5.2,6.2,14.3,8c5,1,19.3-6.2,21.4-1.2c2.9,6.6-11.4,14.7-9.9,20c0.8,2.9,3.9,3.8,3.9,6.6 c0,4.4-6.7,7.2-6.7,12.9c0,4.7,0,3.9-1,8.3c-8.9-2-26.8-2.4-36.1-4c-0.1-11.5,2-13.2,10.6-24.1c1.2-1.6,0.2-8-1.5-11.3 c-0.9-1.8,1.5-15,3.3-15.1C619,201.8,619.5,201.7,619.9,201.8z M453.1,380.4c22.8,25.6,26.5,34.2,31.4,39.6c3.3,3.7,12.7-1.4,16.5,0 c6,2.1,11.9,5.2,17.9,1.9c4.8-2.6,24.6,1.1,31.3,2c3-5.8-5.5-17.5-2.4-19.9c4.3-3.3,14.3-1.4,21.9-10.1c11.2-0.4,12.5-0.6,15.6-1.1 c4.2-4.6,4.6-9,15.9-14.4c1.4-2.4,0.3-12.8,1-18.9c28.7-2.5,25.7-5.3,30.8-8.6c5.1-3.4,14.7,3.4,17.9,6.9c7.7,0.3,29.7,1.7,37,1.4 c4.9-3.8,10.1-9.8,12-14.3c0-4.7,2-24,4.8-28.2c9.2,0.9,18.7,1.8,29.8,1.9c9.7-9.7,9.9-10.1,13.5-14.8c-9.1-13.6-13.8-12.1-19.1-8.7 c3.6-7.1,5.1-13.9,6.5-20.6c1.1-5.4-6.3-22.5-7.8-25.5c-3.1-6.2,6.4-3.8,10.8-3.7c4.3,6.6,8.9,14.3,9.1,26.4 c0.1,4.7-0.3,6.3-2.9,11.1c5,5.7,4.9,5.8,9.8,11.4c5.9-14.9,5.5-15.2,6.8-20.4c1.2-4.9,2.1-8,0.8-12.9c-4.2-17-6.7-32.9-20.6-42.5 c-5.6-2.9-15.5-3-20.6-0.6c-4.9,2.3-12.4,8.7-18.8,11.9c-0.7-6.8,0.1-2.6-1-8.1c7.4-11.2,22.7-21.3,30.5-29.8 c-9.6-18.6-22.9-31.8-34.2-47.5c-1.5-17.6-0.7-10.8-1.8-19.5c-9.4-2.1-4.3-1.2-10.4-2.5c1.4-12.1,1.2-12.5,2-18.7 c0-2.1-13.6-14.8-15.6-15.8c-8.6,1.4-2.4,0.4-12,2.2c-13.4-7.1-9.1-4.3-19.9-10.2c-13.6,2.3-33.5,8.9-46.4,14.1 c-10.6,0.7-10.4,1.5-18.6,1.4c-3.7,0-7.6-2-8.8-3.2c-7.7,15.8-10.3,21.9-15.5,32.3c-4.8-0.1-22.3-0.6-24-2.5 c-1.3-1.5,0.8-11.5,0.8-13.7c23.4-16.7,17.9-13.2,42.3-27.9c-5.5-5-9.6-8.3-11.1-8.9c-4.8-1.9-8.4-2.8-12.9-4.6 c-3.2-1.3-7.2-3.3-7.4-6.6c-0.3-4.4-6.8-7.9-11.1-10c-4.2-2.1-11.7-3.7-16.9-6.1c3.9,9.2,4.1,9.8,11.3,21.6 c-6.3-2.9-1.6-0.8-10.5-4.9c-5.1,1-8.3,2.4-14.3,4.8c-5.6,8.4-4.6,13.1-8.2,21c4.9,8.2,6.1,8.9,8.6,14.7c-3.1,15.8-9,33.3-25.4,38.2 c-3.7,0-1.2-6.3,0-9.2c3.8-10.8,9-16.5,15.8-24.3c-5.1-11.6-10.4-23.5-14.6-34.4c-6.5,0-7.9-0.3-16.4,0.2 c-13.3,9.9-14,13.3-8.4,21.1c-11.8-7.5-18-11.3-22.8-15c-21.5,16.2-0.5,0.6-21.7,16.2c-10.6-3.9-11.3-3.7-18.6-4.9 c-6.1,5.3-6.5,17.9-7.8,25.1c-2.6,5.2-5.7,4.7-13,9.2c2,7.2,1.3,4.9,4,12.8c-5.6,4.8-0.8,1.2-7.1,8.4c14.6,10.8,8.4,6.3,17.9,13.4 c-5.6,9.3-22.5,6-35.8,6.6c3.4,4.5,7.3,6.6,14.7,15.4c-23.3,0.3-25,0.5-33.9,0.3c-6.1,5.3-14.2,13.7-16.6,18.6 c6.2,6.7,14.3,10.1,22.5,12.8c5.6,0,19.4-0.6,24.4,0.7c3.5,6.8,3.5,7.3,3.2,10.2c19.5-9.1,24.5-8.9,36.1-4.2 c-6,10.6-11.8,18.6-19,27.5c1.6,0.6,4.3,1.4,7.2,2.2c5.6,1.4,12,3.2,13.8,3.7c9.6,16.2,17.6,37.3,21.5,46.4 c-6.7,6.4-9.1,11.9-10.7,19.5c9.5,9.4,18.3,16.4,28.8,25c8,2,4.7,1,10.5,2.5c5.4,7.7,12.5,16.1,14.8,22.1 C461.7,370.8,454.5,379,453.1,380.4z"); connaught.attr({id: 'connaught',class: 'st0','stroke-width': '1','stroke-opacity': '1','fill': '#2d2d2d'}).data('id', 'Connaught');

var leinster = rsr.path(" M529.4,805.9c12-5.4,1.1,0.1,12.4-5.9c-8.4-11.4-5.4-11.3-13.5-21.5c-10.3-1.6-17.6-4.6-23.7-5.2c-4.5-0.4-5.3,0.9-10.1,4.3 c-4.6-5.6-11.9-11.9-16.6-19.9c-3.1-16-0.9-6.7-3.7-23.9c-5.4-5.5-6.6-5-8.5-6.9c7.5-7.2,2.6-2.1,7.5-9c-4.9-4-6.9-6.1-8.4-13.7 c-3.5-18.4-4.4-22.2-7-30c-8.3-6.6-13.7-14.2-15-24.6c-7.3-5.8-7.7-7.7-12.9-13.3c-0.4-2.8,3.5-12,5.9-20.7 c-7.5-8.2-6.2-7.2-12.6-11.7c-6.1,5.9-9.3,8.2-10.6,14.6c-3.9,3-7.8,6.9-15.7,9.5c-4.4-4.8-4.8-6-10.2-14.2c3.7-3.1,5.5-3.7,8.6-4.3 c0-6.5,2.7-10.1,5.6-16.6c2.7-6,2.4-10.4,2.4-16.9c0-4.2,1.1-6.2-21.5-17.4c-12.6,1.3-19.3,20.8-33.1,40.8c-5.7,0-14.1-0.3-20.3-0.9 c-17.9-16.4-28.3-17.2-44.7,0.1c-6.4-2.2-8.3-2.7-15.8-6.1c1.5-6.1,1.7-7.2,3.2-13.2c-6.2-4.7-15-15.5-18.7-31.3 c-15,4.6-4.9,1.6-22.7,7.3c-4.9-1.7-10.7-4.1-13.3-4.7c-6.4,8.7-23.9,40.3-27.1,48.1c7.9,2.9,5.3,2.2,11.8,4.6 c-18.8,31.6-19.6,32.7-25.6,41.5c-7.3,0-5.2,0-11.1,0.1c-16.7,11.7-25.3,22.4-41.4,35.8c21.4-0.1,23.4,0,29.2-0.5 c8.9-3.4,9.2-3.6,24.8-9.2c7.4,2.2,22,6.3,27.2,14.9c-7.2,2.5-25.2-3.5-47.7,2.7c-4.2,25.1-15,18.8-39.8,30.4c6,4.7,3.6,3.2,9.6,7.7 c-0.2,6.8,0,5.9,0.2,22.2c5.9,4.9,2,1.6,8.9,7.9c-6.6,2.9-13.8,3.5-20.6,3.1c-3-4-7.3-9.6-11.6-14c-8.1,4.2-6.3,3.2-19.6,9.8 c-4.3-10.3-2.2-4.5-5.4-13.5c-12.2,8.8-23.5,16.1-34.8,24.3c0.7,7.5,0,3.2,0.8,17.7c28.5-1,54.4-3.3,83-6c4.8-0.6,12.6,7.6-7.6,8.9 c-2.8,4.9-1.9,3.3-5.1,9c-28.4,12.7-43.7,16-72.7,33.2c7.6,17.3,7.4,17.1,15.4,28c9-5.2,9.4-5.2,15.4-8.4 c-0.5,12.6-1.1,15.5,9.1,23.2c16.5-6.7,48.7-17.8,67.1-23.5c-26.1,25.8-63.5,37.7-81.9,56.4c28.2-0.5,71-16.6,89.5-23.3 c7.1,4.8,8.7,6.1,12.8,11.7c-30.6,14.2-17.3,8-52.6,24.5c8.5-0.2,14.5-0.4,25.8-0.8c-11,8-4,2.8-30.3,22.1 c19.6-3.9,32.7-6.8,51.1-11.7c13.6,6.7,15.9,8.5,30.8,15.4c15.1-6.8,38.6-17.4,54.1-23.6c7.8,3,8,2.9,12.3,5.6c5.3-7,7-11.5,10-15.6 c10.9,1.6,15.1,5.1,19.3,6c16-12.3,51-35.3,61.7-37.2c19.7-5.6,34.8-18.3,50.6-30.6c10.5-0.5,8.9-0.8,17.8-0.8 c5.5-5.5,15.8-16.5,21.9-23.9c-4.2-9.6-2.5-5.4-5.3-12.9c23.5-3,50-7.6,69.6-8C511.5,802,516.5,803.2,529.4,805.9z"); leinster.attr({id: 'leinster',class: 'st0','stroke-width': '1','stroke-opacity': '1','fill': '#2d2d2d'}).data('id', 'Leinster');

var munster= rsr.path(" M382.9,558.1c8.4-4,11-5.7,18.7-10.5c-11.8-12.9-1.6-1.2-12.9-14.5c8.9-9.7,11.7-13.1,20.3-20.2c-0.2-19.3-0.5-24.5-0.7-34.5 c-3.1-6.2-2.3-1.2-7.4-13.7c-3.2-8-3.3-15.2-1.3-20.2c3.7-9.4,10-15.4,16.3-22.4c-0.2-8.1,0.6-8.9,1.5-13.2c9.1-1,6.1-1.2,20-1.6 c1.6-7.3,2.3-9.8,2.2-12c-0.1-2.2,4.5-3.6,14.2-15.6c6-7,7.8-11.2,5.7-14.3c-2-3.1-10-15.5-14-20.1c-8.7-2.2-3.6-0.8-10.6-2.4 c-9.5-8.3-19.5-16-28.5-24.9c1-7.7,4.7-14.3,10.6-19.4c-10-24.7-11.5-29.1-21.4-46.6c-2.6-0.7-15-4.1-20.6-5.2 c-5.5,2.2-17.8,3.9-24.2,4.3c-9.9,6.6-22.8,16.2-30,23.8c11.6,8.1,12.6,9.4,19.9,17.9c-16.6,0.9-29.2,3.1-42,6.8 c-6.4-3-10.5-6.6-17.1-10.9c-3.5-0.3-4.8-0.3-11.5-0.3c-7.3,8.5-9.3,13.2-16.1,24.5c-8.8-21-11.5-28.9-14.4-34.9 c-25.2-0.6-34.5-0.5-57.1-1.2c-4.5-3.6-6.7-6.2-10-7c-6.8-0.4-9,0.2-13.2,2.7c3,3.7,2.5,3.5,5.1,10.3c-2.7,3.4-2.8,4.1-9.8,11.2 c-6.4-10.3-7.6-12.1-10.5-14.2c-19.2,14.5-18.5,21.6-22.9,41.2c4.6,2.2,4.6,2.3,8.2,3.8c6.1-12.8,7.9-18.2,12.3-24.3 c3.9,2.1,4.2,2.2,6.4,5.8c-3.1,11.9-4.4,17.2-7.4,26.2c11.9,7.2,12.7,16,13.6,22.8c-3.7-3.3-14.7-13.3-15.6-14.2 c-13.3-0.4-12.4-0.4-22.5-0.3c-6,5.1-5.9,4.8-10.2,12.2c7.7,1.6,13.1,2.5,22.8,5.9c3,3,13.4,20.5,15,23.7 c11.5-3.6,11.9-3.8,18.2-5.5c7.5-1.9,21.7-3.8,27.4,2.1c-0.3,14.2-0.7,18.8-7,23.6c-23-0.3-37.3,2.6-38.2,4.3 c-2.6,5.2-4.3,23.3-4.3,29.5c-4,0.6-6.8,0.8-12.5,2.4c-0.9,5.1-0.5,3.6-1.6,7.9c-19.1,0.2-20.2,1-22.5,1.8 c8.9,14.6,12.4,20.5,15.5,26.8c-8.6,3.9-9.7,4.3-16.9,7.4c5.6,2.2,22.6,8.1,27.9,9.4c2.8-1.4,3.7-1.7,8.1-4c3.4,2.2,5.2,3.3,8.2,6.3 c-2.9,4.7-5.8,8.1-8.8,12.9c5.8,2.7,12.9,4.7,17.8,4.7c8.1-7.4,9.8-8.6,19-16.7c3.1,14,4.1,21.4,5.8,38.9c22.2,0.5,44.9-2,66.6-6.5 c-1.9-9.7-4.2-22.2-4.6-32.2c1.1-2.9,7.4-2,8.2-0.6c6.8,16.8,10.7,25.9,18.3,49.5c-4.8,0.1-8.3,1.4-15.8,3.9 c1.4,9.1,10.4,24.8,18.8,31.2c-2,7.7-1.6,8.2-3.2,13.2l15.9,6.2c20.6-19.9,29.6-13.3,44.7-0.1c6.1,0.6,14.6,0.9,20.2,0.9 c13.8-20,20.5-39.5,33.2-40.8"); munster.attr({id: 'munster',class: 'st0','stroke-width': '1','stroke-opacity': '1','fill': '#2d2d2d'}).data('id', 'Munster');

var ulster = rsr.path(" M651.4,358.1c-4.4-3.6-8.9-7.5-12.8-8.2c-2.5-0.4-4-0.1-5.3,0.7c-2.1,1.2-3.5,3.3-6.8,4.8c-9.3,2.9-12.1,2.7-24.3,4.5 c-1.1,9.2,0.9,12.3-1,18.5c-5,2.9-8.1,3.1-15.9,14.5c-7.5,1.1-6.9,0.3-15.6,1.2c-4.1,3.1-1.8,2.3-5.6,4.9 c-4.4,3.1-15.9,2.3-17.2,6.4c0,4.8,6,12.6,2.9,18.6c-4.9-1.2-20-3-25.4-3c-6,0-4.9,2.2-10.8,2.2c-5.7,0-9.2-3.4-14.9-3.4 c-3.4,0-12.4,3.3-14.9,0c-8.5-13.2-20.3-27.2-30.8-39.5c-7.3,8.8-7.4,7.5-13.2,14c-1.9,11.1-0.9,6.2-2.4,12.5 c-10.2,1.6-4.7-0.1-20.4,2.2c-1.2,4.6-1.3,9.7-1.5,13.6c-13.1,13.3-15.8,18.8-17,25c-1.6,8.2,0.8,18.2,9.7,30.9 c-0.1,4.7,1.9,32.9,0.2,34.8c-10.3,8.7-14.1,13.7-20,19.8c5.3,6.3,3.6,4.1,13.1,14.6c-7.7,4.8-10.3,6.5-18.7,10.5l-0.9,0.4 c22.6,11.2,21.5,13.2,21.5,17.4c0,6.5,0.2,10.9-2.4,16.9c-2.9,6.5-5.6,10.1-5.6,16.6c-3.1,0.7-4.9,1.2-8.6,4.3 c5.4,8.2,5.8,9.4,10.2,14.2c4.9-1.6,8.2-3.7,11-5.8c0.6-0.4,1.1-0.9,1.6-1.3c1-0.8,2-1.6,3-2.4c1.3-6.4,4.4-8.7,10.6-14.6 c6.4,4.5,5.1,3.5,12.6,11.7c-2.5,8.7-6.3,17.9-5.9,20.7c5.2,5.6,5.6,7.5,12.9,13.4c1.3,10.4,6.7,18,14.9,24.6 c2.6,7.7,3.6,11.5,7.1,29.9c1.4,7.6,3.5,9.7,8.4,13.7c-4.9,6.9,0,1.8-7.5,9c1.9,1.9,3,1.4,8.5,6.9c0.7,4.1,1,6.6,1.3,8.4l2.3,15.7 c4.2,6.6,10.9,13.2,16.8,19.8c5.4-4.6,6.4-5.3,13.9-3.7c6.3,1.3,16.7,4,19.7,4.5c7.6,9.5,5.5,10.1,12.1,19.5 c0.2,0.3,0.5,0.7,0.8,1.1c6.6-4.3,14-9.2,20.1-12c5.2,3.9,6.8,4.4,14.1,10.6c13.5,0.4,34.8,0.1,40.7-2.9 c-9.8-20.2-9.9-20.8-17.5-35.5c17.6-3.5,8.5-1.6,20.2-4c8.9-14.7,14-24.9,23.7-38.5c0-7.1-0.4-13.6-0.7-26.5 c5.5-11.3,8.3-14.6,11.4-20.8c1.2-11.2,0.3-2.7,1-12.8c11.5-23.2,11.8-24.5,18.9-36.9c-4.5-11.9-0.6-0.9-6.5-17.3 c0-4.8,0.3-3.5,0.3-8.2c3.7-11.2,0.6-19.4-6.1-32.5c0-2.8-0.3-7.8,0.1-18.4c-9.3-10.5-9.8-10.9-13.7-15.7c4.5-1,20.4-3.6,23.5-5.1 c-9.5-14.2-7.3-11.1-14.4-22.2c8-7,0.7-0.7,8.8-7.8c0.2-13.6,0.2-12.8,0-19.4c-12-14.5-12.1-14.3-16.8-19.9 c0.3-25.7,0.2-25.5,1.4-46.7c-12-4.4-10.7-3.8-20.6-8.7c0.4-19.5,0.9-17.2,1.7-25.5c8.6,1.1,20.4,2.4,33.8,3.6 C653.6,361.5,657.7,367.9,651.4,358.1z"); ulster.attr({id: 'ulster',class: 'st0','stroke-width': '1','stroke-opacity': '1','fill': '#2d2d2d'}).data('id', 'Ulster');

var regions = [connaught, leinster, munster, ulster];





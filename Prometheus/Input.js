//Input

//Keycodes. Yep, the're all variables. I am crying.
backspace = 8;
tab = 9;
enter =	13;
shift =	16;
ctrl =	17;
alt =	18;
pause =	19;
capslock = 20;
esc = 27;
page_up =	33;
space =	32;
page_down =	34;
end =	35;
home = 36;
arrow_left = 37;
arrow_up =38;
arrow_right = 39;
arrow_down=40;
print_screen=	44;
insert=	45;
del=	46;
ZERO=	48;
ONE=	49;
TWO=	50;
THREE=	51;
FOUR=	52;
FIVE=	53;
SIX=	54;
SEVEN=	55;
EIGHT=	56;
NINE=	57;
a=	65;
b=	66;
c=	67;
d=	68;
e=	69;
f=	70;
g=	71;
h=	72;
i=	73;
j=	74;
k=	75;
l=	76;
m=	77;
n=	78;
o=	79;
p=	80;
q=	81;
r=	82;
s=	83;
t=	84;
u=	85;
v=	86;
w=	87;
x=	88;
y=	89;
z=	90;



var keyDown = [];

window.addEventListener('keydown', function(e){
  keyDown[e.keyCode] = true;
});

window.addEventListener('keyup', function(e){
  delete keyDown[e.keyCode];
});
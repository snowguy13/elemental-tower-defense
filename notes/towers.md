Towers
=======

States
------

### Under Construction
The tower is being constructed. It will remain in this state until is has
received the required amount of Elemental Ether for its construction.

### Ready
The tower is ready to fire a bullet. When in this state, the tower will
continuously perform the following logic:

1. If it does not have enough Elemental Ether stored to fire a bullet, stop.
2. If it cannot satisfy its target preferences, stop.
3. Otherwise, fire the bullet as dictated by the tower's target preferences
   and transition to the **Cooldown** state.

### Cooling Down

The tower has recently fired a bullet and is temporary unabled to fire another.
It can still receive Elemental Ether at this time; however, its own inherent
Ether generation will not resume until it exits the **Cooldown** state.

Cooldown will not finish until the tower's cooldown counter reaches zero.

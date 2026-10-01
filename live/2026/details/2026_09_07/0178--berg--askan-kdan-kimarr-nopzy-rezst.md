### Roster Details<br />
Team Name: BERG<br />
Roster: Askan, kdaN, KiMaRR, nopzy, Rezst<br />
Global Rank: [178](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [127]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  735.1<br />
<br />
Final Rank Value (735.1) = Starting Rank Value (791.9) + Head To Head Adjustments (-56.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.241[<sup>1</sup>](#table2)
- Bounty Collected: 0.229[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.327[<sup>2</sup>](#table1)

The average of these factors is 0.206<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 791.9
- 400 + ( ( 0.206 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 791.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      234 | 2026-08-30 | Azuolas         | L   | 1.000      | -            | -                | -                | -         |   -10.62 | Askan, kdaN, KiMaRR, nopzy, Rezst    |
|           12 |      260 | 2026-08-30 | WBT             | L   | 1.000      | -            | -                | -                | -         |   -13.23 | Askan, kdaN, KiMaRR, nopzy, Rezst    |
|           11 |      720 | 2026-08-17 | ENCE            | L   | 1.000      | -            | -                | -                | -         |   -11.61 | Askan, kdaN, KiMaRR, nopzy, Rezst    |
|           10 |      743 | 2026-08-16 | Mai Tai         | L   | 1.000      | -            | -                | -                | -         |   -22.45 | Askan, kdaN, KiMaRR, nopzy, Rezst    |
|            9 |      746 | 2026-08-16 | HAVU            | L   | 1.000      | -            | -                | -                | -         |   -14.31 | Askan, kdaN, KiMaRR, nopzy, Rezst    |
|            8 |      843 | 2026-08-13 | Endless Journey | W   | 1.000      | 0.344        | 0.007 (0.002)    | 0.504 (0.174)    | 0 (0.000) |    15.50 | Askan, kdaN, KiMaRR, nopzy, Rezst    |
|            7 |      855 | 2026-08-12 | Permitta        | L   | 1.000      | -            | -                | -                | -         |   -15.89 | Askan, kdaN, KiMaRR, nopzy, Rezst    |
|            6 |     1938 | 2026-06-29 | SINQU           | W   | 0.732      | 0.303        | 0.004 (0.001)    | 0.169 (0.037)    | 1 (0.732) |    11.53 | Askan, CrePoW, KiMaRR, Rezst, Tree60 |
|            5 |     1943 | 2026-06-29 | Leo             | L   | 0.731      | -            | -                | -                | -         |    -7.77 | Askan, CrePoW, KiMaRR, Rezst, Tree60 |
|            4 |     1949 | 2026-06-29 | Aimhaus         | W   | 0.730      | 0.303        | 0.000 (0.000)    | 0.028 (0.006)    | 1 (0.730) |     2.58 | Askan, CrePoW, KiMaRR, Rezst, Tree60 |
|            3 |     1960 | 2026-06-28 | 6666            | W   | 0.726      | 0.303        | 0.000 (0.000)    | 0.024 (0.005)    | 1 (0.726) |     2.62 | Askan, CrePoW, KiMaRR, Rezst, Tree60 |
|            2 |     1963 | 2026-06-28 | ASTRAL          | L   | 0.725      | -            | -                | -                | -         |    -5.21 | Askan, CrePoW, KiMaRR, Rezst, Tree60 |
|            1 |     1968 | 2026-06-28 | SINQU           | W   | 0.725      | 0.303        | 0.004 (0.001)    | 0.169 (0.037)    | 1 (0.725) |    12.08 | Askan, CrePoW, KiMaRR, Rezst, Tree60 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($365.77)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-29 |      0.732 | $500.00        | $365.77         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

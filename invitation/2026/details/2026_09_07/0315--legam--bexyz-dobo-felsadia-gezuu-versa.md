### Roster Details<br />
Team Name: LEGAM<br />
Roster: bexyz, dobo, FELSADIA, GEZUU, versa<br />
Global Rank: [315](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_09_07.md)<br />
Regional Rank: [36]( ../../standings_asia_2026_09_07.md)<br />
<br />
Final Rank Value:  566.4<br />
<br />
Final Rank Value (566.4) = Starting Rank Value (588.2) + Head To Head Adjustments (-21.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.193[<sup>1</sup>](#table2)
- Bounty Collected: 0.165[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.037[<sup>2</sup>](#table1)

The average of these factors is 0.099<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 588.2
- 400 + ( ( 0.099 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 588.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      485 | 2026-08-26 | Kaleido    | L   | 1.000      | -            | -                | -                | -         |    -8.89 | dobo, FELSADIA, GEZUU, satonos, zigler |
|            6 |      539 | 2026-08-25 | Rare Atom  | L   | 1.000      | -            | -                | -                | -         |    -8.86 | dobo, FELSADIA, GEZUU, satonos, zigler |
|            5 |     3549 | 2026-05-02 | Just Swing | L   | 0.337      | -            | -                | -                | -         |    -3.67 | bexyz, dobo, FELSADIA, GEZUU, versa    |
|            4 |     3598 | 2026-05-01 | Rooster    | L   | 0.331      | -            | -                | -                | -         |    -3.11 | bexyz, dobo, FELSADIA, GEZUU, versa    |
|            3 |     3639 | 2026-04-30 | Banzai     | W   | 0.324      | 0.471        | 0.001 (0.000)    | 0.047 (0.007)    | 1 (0.324) |     6.13 | bexyz, dobo, FELSADIA, GEZUU, versa    |
|            2 |     4590 | 2026-04-03 | NEXVOID    | L   | 0.144      | -            | -                | -                | -         |    -1.24 | bexyz, dobo, FELSADIA, GEZUU, versa    |
|            1 |     4666 | 2026-04-02 | yunglean   | L   | 0.139      | -            | -                | -                | -         |    -2.08 | bexyz, dobo, FELSADIA, GEZUU, versa    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($33.96)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-04 |      0.151 | $225.00        | $33.96          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

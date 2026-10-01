### Roster Details<br />
Team Name: Invicta<br />
Roster: artie, Griller, SinK<br />
Global Rank: [269](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [178]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  650.7<br />
<br />
Final Rank Value (650.7) = Starting Rank Value (661.7) + Head To Head Adjustments (-11.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.259[<sup>1</sup>](#table2)
- Bounty Collected: 0.195[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.084[<sup>2</sup>](#table1)

The average of these factors is 0.135<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 661.7
- 400 + ( ( 0.135 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 661.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1050 | 2026-06-12 | Sashi Academy | L   | 0.854      | -            | -                | -                | -         |    -7.96 | artie, Griller, Meldola, SinK, vigg0 |
|            5 |     1056 | 2026-06-12 | Washed        | L   | 0.853      | -            | -                | -                | -         |    -6.01 | artie, Griller, Meldola, SinK, vigg0 |
|            4 |     1646 | 2026-05-23 | Strael Bora   | L   | 0.721      | -            | -                | -                | -         |    -4.94 | artie, Griller, SinK, slize, Teelz   |
|            3 |     1659 | 2026-05-23 | STATE         | L   | 0.720      | -            | -                | -                | -         |    -1.91 | artie, Griller, SinK, slize, Teelz   |
|            2 |     1682 | 2026-05-23 | Fortress      | W   | 0.718      | 0.341        | 0.003 (0.001)    | 0.149 (0.036)    | 1 (0.718) |    14.93 | artie, Griller, SinK, slize, Teelz   |
|            1 |     2630 | 2026-04-25 | Sashi Academy | L   | 0.534      | -            | -                | -                | -         |    -5.08 | artie, Griller, SinK, vigg0, Viggo   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($679.11)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-13 |      0.861 | $789.00        | $679.11         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
